var a = prompt('Wprowadź pierwszą zmienną');
var b = prompt('Wprowadź drugą zmienną');
var value = (a * a) - (2 * a * b) + (b * b);

alert('Twój wynik to ' + value);
console.log('Wynik działania na zmiennej pierwszej: ' + a + ' i zmiennej drugiej: ' + b + ' wynosi: ' + value);

if (value > 0) {
	alert("Twój wynik jest DODATNI");
} else if (value < 0) {
	alert("Twój wynik jest UJEMNY")
} else if (value = 0) {
	alert("Twój wynik to ZERO")
}


