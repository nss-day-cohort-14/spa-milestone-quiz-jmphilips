var inputToChange;
var divToChange;
var resetButton = document.getElementById("resetButton");
var Carlot = (function(miracle) {
	



			miracle.activateEvents = function() {

				resetButton.addEventListener("click", function(){
					userInput.value = ""
				});


				outputEl.addEventListener("click", function(){

				if (event.target === divToChange || event.target.parentNode === divToChange) {
					divToChange.setAttribute("class", "");
					divToChange.setAttribute("class", "col-xs-4 normalDivs");
				} else {

					if (divToChange != null) {
						divToChange.setAttribute("class", "");
						divToChange.setAttribute("class", "col-xs-4 normalDivs");
					};

					if (event.target.id.split("--")[0] === "message") {
				 	divToChange = event.target.id
					} else if (event.target.parentNode.id.split("--")[0] === "message") {
					divToChange = event.target.parentNode.id
					};

					divToChange = document.getElementById(divToChange);
					divToChange.classList.toggle("active")	
					document.getElementById("userInput").focus();


				};

				inputToChange = document.getElementsByClassName("active")[0];
				inputToChange = inputToChange.children[3];
				userInput.value = "";
				})

				window.addEventListener("keyup", function() {
					inputToChange.innerText = userInput.value;
				});
		}

		return miracle

			

})(Carlot || {});