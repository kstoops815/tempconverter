
var outputTemp = 0;

var button = document.getElementById("converter");

var typeOfTemp;

var convertedTypeOfTemp;


button.addEventListener("click", determineConverter);
button.addEventListener("keydown", enterButton);

function enterButton() {
	if(event.which===13) {
	determineConverter;
	}
}




function determineConverter() {
	var inputTemp = document.getElementById("inputTemp").value;

	if(document.getElementById("far").checked){
			toCelsius(inputTemp);
			typeOfTemp = document.getElementById("far").value;
			convertedTypeOfTemp = document.getElementById("celsius").value;
	} else if (document.getElementById("celsius").checked){
			toFahrenheit(inputTemp);
			typeOfTemp = document.getElementById("celsius").value;
			convertedTypeOfTemp = document.getElementById("far").value;
	} else {
			alert("You must select a temperature type.");
	}

	
	colorAssignment(inputTemp, outputTemp);
}




	

function toCelsius (inputTemp) {
	outputTemp =Math.round((inputTemp - 32) * (5/9));
}

function toFahrenheit (inputTemp) {
	outputTemp = Math.round((inputTemp * (9/5)+32));
}

function colorAssignment (inputTemp, outputTemp){
	var color
	if((outputTemp>90 && document.getElementById("celsius").checked) || (outputTemp>32 && document.getElementById("far").checked)){
		color = "hot";
	} else if ((outputTemp<32 && document.getElementById("celsius").checked) || (outputTemp<0 && document.getElementById("far").checked)){
		color = "cold";
	} else {
		color = "comfy";
		}
	
	document.getElementById("tempStatement").innerHTML = "The temperature of " + inputTemp + "&deg " + typeOfTemp + " is equal to <span class=" + color + "> " +outputTemp + "&deg " + convertedTypeOfTemp + "</span>!";
}
