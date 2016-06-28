var Carlot = (function(carListeners) {

	var inputToChange;
	var oldTarget;
	var clearButton = document.getElementById("clearButton");

	carListeners.activateEvents = function() {

	clearButton.addEventListener("click", function(){

		if (oldTarget != null) {
			carListeners.backToOriginal(oldTarget)
		};
		userInput.value = "";				
	})

	outputEl.addEventListener("click", function(){
			var currentElement = event.target;
	
			if (currentElement.parentNode.id.split("--")[0] === "message") {
			currentElement = currentElement.parentNode
			};

			if (oldTarget === currentElement) {
				carListeners.backToOriginal(currentElement);
				oldTarget = null;
				userInput.value = "";
			} else {

				if (oldTarget != null) {
					carListeners.backToOriginal(oldTarget)
				};

				inputToChange = currentElement.children[3];
				inputToChange.innerText = "";

				carListeners.special(currentElement, "yellow");
				userInput.focus();
				userInput.value = "";

				oldTarget = currentElement;
			};
	});

	userInput.addEventListener("keyup", function(){
		inputToChange.innerText = userInput.value;
	});
		
};
return carListeners
})(Carlot || {});
