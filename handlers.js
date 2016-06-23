var inputToChange;
var divToChange;
var Carlot = (function(miracle) {
	



			miracle.activateEvents = function() {
				outputEl.addEventListener("click", function(){

				if (event.target === divToChange) {
					divToChange.className = "";
					divTochange.className = "normalDivs"
				};

				if (divToChange != null) {
					divToChange.classList.toggle("active");
				};

				if (event.target.id.split("--")[0] === "message") {
				 	divToChange = event.target.id
				} else if (event.target.parentNode.id.split("--")[0] === "message") {
					divToChange = event.target.parentNode.id
				};


				divToChange = document.getElementById(divToChange);
				divToChange.classList.toggle("active")	
				document.getElementById("userInput").focus();

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