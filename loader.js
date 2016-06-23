var Carlot = (function(miracle) {
	var touchyCar = [];




		miracle.loadCars = function(callback) {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function(cars) {
				touchyCar = JSON.parse(this.responseText).cars;
				// console.log(cars)
				callback(touchyCar)
			});

			loader.open("GET", "inventory.json");
			loader.send();
			// return cars;
		};

		miracle.getInventory = function() {
			return touchyCar;
		};
	return miracle
})(Carlot || {});

