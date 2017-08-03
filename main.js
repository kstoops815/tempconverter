var inputTemp = document.getElementById("inputTemp").value;
var outputTemp = 0;
function toCelsius (inputTemp) {
	outputTemp =Math.round(((inputTemp - 32) * 5)/9);
	return outputTemp;
}

function toFahrenheit (inputTemp) {
	outputTemp = Math.round(((inputTemp * 9)/5)+32);
	return outputTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	var tempType = ;
	if(tempType===tempCel){
		toFahrenheit(inputTemp);
	} else if (tempType===tempFar){
		toCelsius(inputTemp);
	} else {
	alert("You must select a temperature type!");
	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter(inputTemp));

//console.log("event", clickEvent);