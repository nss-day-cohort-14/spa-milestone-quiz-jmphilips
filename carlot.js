var outputEl = document.getElementById("outputEl");
count = 0;


function showCars (cars) {
	for (var i = 0; i < cars.length; i++) {

		var cardContainer = document.createElement("div");
		cardContainer.setAttribute("class", "col-xs-4 normalDivs");
		cardContainer.setAttribute("style", "border-color: " + cars[i].color);
		cardContainer.setAttribute("id", "message--" + count)
		
		var carMakeH1 = document.createElement("h1");
		var carModelP = document.createElement("p");
		var carYearP = document.createElement("p");
		var carColorP = document.createElement("p");
		var carPurchase = document.createElement("p");
		var carDescribeP = document.createElement("p");



		var carMake = cars[i].make;
		var carModelText = cars[i].model;
		var carYearText = cars[i].year;
		var carColorText = cars[i].color;
		var purchasedText = cars[i].purchased;
		var carDescribeText = cars[i].description;


		carMakeH1.innerText = carMake;
		carModelP.innerText = carModelText;
		carYearP.innerText = carYearText;
		carColorP.innerText = carColorText;
		carDescribeP.innerText = carDescribeText;

		if (purchasedText === true) {
			carPurchase.innerHTML = "SOLD";
		} else {
			carPurchase.innerHTML = "AVAILABLE";
		};

		outputEl.appendChild(cardContainer);
		cardContainer.appendChild(carMakeH1);
		cardContainer.appendChild(carModelP);
		cardContainer.appendChild(carYearP);
		cardContainer.appendChild(carColorP);
		cardContainer.appendChild(carDescribeP);
		cardContainer.appendChild(carColorP);
		cardContainer.appendChild(carPurchase);

		count++
	};

	

}

Carlot.loadCars(showCars)