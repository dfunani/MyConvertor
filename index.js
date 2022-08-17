/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversion =
{
	"meter": 3.28084,
	"liter": 0.219969,
	"kilo": 2.20462,
	"feet": 0.3048000097536,
	"gallon": 4.54609,
	"pound": 0.453592
}

const convert_btn = document.getElementById('convert-btn');
const input_value = document.getElementById('input-unit');
const length_text = document.getElementById('length-text');
const mass_text = document.getElementById('mass-text');
const volume_text = document.getElementById('volume-text');

window.onload = render_text(input_value.value);
convert_btn.addEventListener('click', () => { render_text(input_value.value); });

function render_text(unit) {
	if (unit <= 0) {
		return;
	}
	length_text.innerHTML = unit + ' ' + plural(unit, 'meters') + ' = ' + convertor(unit, "meter") + ' ' + plural(convertor(unit, "meter"), 'feet') + ' | ' + unit + ' ' + plural(unit, 'feet') + ' = ' + convertor(unit, "feet") + ' ' + plural(convertor(unit, "feet"), 'meters');

	volume_text.innerHTML = unit + ' ' + plural(unit, 'liters') + ' = ' + convertor(unit, "liter") + ' ' + plural(convertor(unit, "liter"), 'gallons') + ' | ' + unit + ' ' + plural(unit, 'gallons') + ' = ' + convertor(unit, "gallon") + ' ' + plural(convertor(unit, "gallon"), 'liters');

	mass_text.innerHTML = unit + ' ' + plural(unit, 'kilos') + ' = ' + convertor(unit, "kilo") + ' ' + plural(convertor(unit, "kilo"), 'pounds') + ' | ' + unit + ' ' + plural(unit, 'pounds') + ' = ' + convertor(unit, "pound") + ' ' + plural(convertor(unit, "pound"), 'kilos');
}

function convertor(unit, convert) {
	return (parseFloat(unit) * parseFloat(conversion[convert])).toFixed(3);
}

function plural(unit, word) {
	if (parseFloat(unit) === 1) {
		if (word === 'feet') {
			return 'foot';
		}
		return word.slice(0, -1);
	}
	else {
		return word;
	}
}