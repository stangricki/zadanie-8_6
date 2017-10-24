var a = 2, b = -3; 
var value = (a * a) - (2 * a * b) + (b * b);
//console.log(value)
	if (value>0) {
		console.log(value + "\nWynik jest dodatni" )
	}
	else if (value<0) {
		console.log(value + "\nWynik jest ujemny");
	}
	else {
		console.log(value + "\nWynik wynosi zero")
	}