var Carlot = (function(miracle) {
	var cars = [];

	return {



		loadCars: function(callback) {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function(cars) {
				cars = JSON.parse(this.responseText).cars;
				callback(cars)
				console.log(cars)
			});

			loader.open("GET", "inventory.json");
			loader.send();
			return cars;
		},
	};
})(Carlot || {});

