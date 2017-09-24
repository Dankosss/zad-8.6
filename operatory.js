var a = prompt('Type the value of "a"');
var b = prompt('Type the value of "b"');
var value = (a * a) + (2 * a * b) - (b * b);
if (value > 0) {
	console.log('wynik dodatni!');
}
else if (value < 0) {
	console.log('wynik ujemny');
}
else {
	console.log('wynik jest równy 0!');
}