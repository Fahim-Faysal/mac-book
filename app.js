let finalPrice = document.getElementById('final-cost');
let totalCost = document.getElementById('total-cost');
let finalCost = 0;
let base = 1299;
let memoryParseCost = 0;
let strogeParseCost = 0;
let deliveryParseCost = 0;

// memory calculaton function

function extraMemory(increasing) {
	const memoryCost = document.getElementById('extra-m-cost');
	const strogeCost = document.getElementById('extra-s-cost');
	let strogeParseCost = strogeCost.innerText;
	strogeParseCost = parseInt(strogeParseCost);
	const deliveryCost = document.getElementById('extra-d-cost');
	let deliveryParseCost = deliveryCost.innerText;
	deliveryParseCost = parseInt(deliveryParseCost);

	if (increasing == true) {
		memoryCost.innerText = 0;
		memoryParseCost = 0;
		finalCost = base + memoryParseCost + strogeParseCost + deliveryParseCost;
		totalCost.innerText = finalCost;
		finalPrice.innerText = finalCost;
	} else {
		memoryCost.innerText = 180;
		memoryParseCost = 180;
		finalCost = base + memoryParseCost + strogeParseCost + deliveryParseCost;
		totalCost.innerText = finalCost;
		finalPrice.innerText = finalCost;
	}
}

document.getElementById('extra-m-eight').addEventListener('click', function() {
	extraMemory(true);
});

document.getElementById('extra-m-sixteen').addEventListener('click', function() {
	extraMemory(false);
});

// stroge calcultion function

function extraStroge(increasing) {
	const strogeCost = document.getElementById('extra-s-cost');

	if (increasing == 256) {
		strogeCost.innerText = 0;
		strogeParseCost = 0;
		finalCost = base + memoryParseCost + strogeParseCost + deliveryParseCost;
		totalCost.innerText = finalCost;
		finalPrice.innerText = finalCost;
	} else if (increasing == 512) {
		strogeCost.innerText = 100;
		strogeParseCost = 100;
		finalCost = base + memoryParseCost + strogeParseCost + deliveryParseCost;
		totalCost.innerText = finalCost;
		finalPrice.innerText = finalCost;
	} else {
		strogeCost.innerText = 180;
		strogeParseCost = 180;
		finalCost = base + memoryParseCost + strogeParseCost + deliveryParseCost;
		totalCost.innerText = finalCost;
		finalPrice.innerText = finalCost;
	}
}

document.getElementById('extra-s-256gb').addEventListener('click', function() {
	extraStroge(256);
});
document.getElementById('extra-s-512gb').addEventListener('click', function() {
	extraStroge(512);
});
document.getElementById('extra-s-1tb').addEventListener('click', function() {
	extraStroge(1);
});

// delvery cost calculation function

function delivaryCost(cost) {
	const extaShippingCost = document.getElementById('extra-d-cost');
	const totalCost = document.getElementById('total-cost');
	if (cost == true) {
		extaShippingCost.innerText = 0;
		deliveryParseCost = 0;
		finalCost = base + memoryParseCost + strogeParseCost + deliveryParseCost;
		totalCost.innerText = finalCost;
		finalPrice.innerText = finalCost;
	} else {
		extaShippingCost.innerText = 20;
		deliveryParseCost = 20;
		finalCost = base + memoryParseCost + strogeParseCost + deliveryParseCost;
		totalCost.innerText = finalCost;
		finalPrice.innerText = finalCost;
	}
}
document.getElementById('free-delivery').addEventListener('click', function() {
	delivaryCost(true);
});
document.getElementById('paid-delivery').addEventListener('click', function() {
	delivaryCost(false);
});

// promo code apply

document.getElementById('apply').addEventListener('click', function() {
	let storeFinal = finalPrice.innerText;
	const promo = document.getElementById('promo');
	let promoValue = promo.value;
	if (promoValue == 'stevekaku') {
		let store = storeFinal - storeFinal * 20 / 100;
		finalPrice.innerText = store;
	}
	promo.value = '';
});
