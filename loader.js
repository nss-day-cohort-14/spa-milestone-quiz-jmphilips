var Carlot = (function(lot) {
	var carsArray = [];

	lot.loadCars = function(callback) {
		var loader = new XMLHttpRequest();

		loader.addEventListener("load", function(car){
			carsArray = JSON.parse(this.responseText).cars;
			callback(carsArray)
		});

		loader.open("GET", "inventory.json");
		loader.send();
	};

	lot.getInventory = function() {
		return carsArray;
	}; 

	return lot;
})(Carlot || {});

