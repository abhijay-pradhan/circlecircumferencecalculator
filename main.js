function calculate() {
	var y = document.getElementById("r").value * 3.14 * 2;
	var x = y + " " + document.getElementById("si").value;
	document.getElementById("ans").innerHTML = x;
}