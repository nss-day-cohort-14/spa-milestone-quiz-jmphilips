var Carlot = (function(lots){

	lots.backToOriginal = function(thing) {
		thing.style.borderWidth = "2px";
		thing.style.backgroundColor = "";
	};

	lots.special = function(thing, colorToBe) {
		thing.style.borderWidth = "4px";
		thing.style.backgroundColor = colorToBe;
	};
	
	return lots;

})(Carlot || {});