let btnOpen = document.getElementById('open-btn'),
	nameShop = document.getElementsByClassName('name'),
	nameShopValue = document.getElementsByClassName('name-value0'),
	budgetShop = document.getElementsByClassName('budget'),
	budgetShopValue = document.getElementsByClassName('budget-value'),
	goodsShop = document.getElementsByClassName('goods'),
	goodsShopValue = document.getElementsByClassName('goods-value'),
	itemsShop = document.getElementsByClassName('items'),
	itemsShopValue = document.getElementsByClassName('items-value'),
	employersShop = document.getElementsByClassName('employers'),
	employersShopValue = document.getElementsByClassName('employers-value'),
	discountShop = document.getElementsByClassName('discount'),
	discountShopValue = document.getElementsByClassName('discount-value'),
	isopenShop = document.getElementsByClassName('isopen'),
	isopenShopValue = document.getElementsByClassName('isopen-value');

	// console.log(btnOpen);
	// console.log(nameShop);
	// console.log(goodsShopValue);
	// console.log(employersShop);
	// console.log(isopenShop);

	let goodsCat = document.getElementsByClassName('goods-item');
	console.log(goodsCat);

	let btns = document.getElementsByClassName('main-functions')[0].getElementsByTagName('button');
	console.log(btns);

	let employersNames = document.querySelectorAll('.hire-employers-item');
	console.log(employersNames);