var Carlot = (function() {
	var submitButton = document.getElementById("submitButton");
	submitButton.addEventListener("click", function(){console.log("it worked")});

	outputEl.addEventListener("click", function(){
		if (event.target.id.split("--")[0] === "message") {
			var divToChange = event.target.id
		} else if (event.target.parentNode.id.split("--")[0] === "message") {
			var divToChange = event.target.parentNode.id
		};

		var divToChange = document.getElementById(divToChange);
		divToChange.classList.toggle("hills")	
		document.getElementById("userInput").focus();

	});

	
})(Carlot || {});