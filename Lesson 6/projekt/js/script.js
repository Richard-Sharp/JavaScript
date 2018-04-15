let btnOpen = document.getElementById('open-btn'),
	// nameShop = document.getElementsByClassName('name'),
	nameShopValue = document.getElementsByClassName('name-value')[0],
	// budgetShop = document.getElementsByClassName('budget'),
	budgetShopValue = document.getElementsByClassName('budget-value')[0],
	// goodsShop = document.getElementsByClassName('goods'),
	goodsShopValue = document.getElementsByClassName('goods-value')[0],
	// itemsShop = document.getElementsByClassName('items'),
	itemsShopValue = document.getElementsByClassName('items-value')[0],
	// employersShop = document.getElementsByClassName('employers'),
	employersShopValue = document.getElementsByClassName('employers-value')[0],
	// discountShop = document.getElementsByClassName('discount'),
	discountShopValue = document.getElementsByClassName('discount-value')[0],
	// isopenShop = document.getElementsByClassName('isopen'),
	isopenShopValue = document.getElementsByClassName('isopen-value')[0];

	// console.log(btnOpen);
	// console.log(nameShop);
	// console.log(goodsShopValue);
	// console.log(employersShop);
	// console.log(isopenShop);

let goodsItem = document.getElementsByClassName('goods-item');
console.log(goodsItem);

let btns = document.getElementsByClassName('main-functions')[0].getElementsByTagName('button');
console.log(btns);

let chooseItem = document.querySelector('.choose-item');
let timeValue = document.getElementsByClassName('time-value')[0];
let countBudgetDay = document.getElementsByClassName('count-budget-value')[0];

let employersNames = document.querySelectorAll('.hire-employers-item');
console.log(employersNames);

let	money,
	price = 3000;


btnOpen.addEventListener('click', () => {
	money = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money === "" || money === null) {
	money = prompt('Ваш бюджет на месяц?', '');
	}
	budgetShopValue.textContent = money;

	nameShopValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();
});

btns[0].addEventListener ('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;

				if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50 ) {
					console.log("Все верно!");
					mainList.shopGoods[i] = a;
					goodsShopValue.textContent = mainList.shopGoods;
				} else {
					alert ('Значение введено некорректно!');
					i--;
				}
			}

});


chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

	if (isNaN(items) && items !== '') {
		mainList.shopItems = items.split(", ");
		mainList.shopItems.sort ();
		itemsShopValue.textContent = mainList.shopItems;
	} 

});


	
timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time >= 9 && time < 21) {
		alert ('Время работать!');
		mainList.open = true;
		} else if (time < 9 && time >= 21, time <= 24) {
			alert("Мы еще закрыты!");
			mainList.open = false;
			} else if (time > 24) {
				alert("На нашей планете в сутка всего 24 часа!");
				mainList.open = false;
				} else { 
					alert ("Такого времени не может быть...");
					mainList.open = false; 
				};

	if (mainList.open == true) {
		isopenShopValue.style.backgroundColor = "green";
	} else {
		isopenShopValue.style.backgroundColor = 'red';
	}

});

btns[1].addEventListener ('click', () => {
	countBudgetDay.value = money / 30;
});

btns[2].addEventListener ('click', () => {
	for (i = 0; i < employersNames.length; i++) {
			let name = employersNames[i].value;
			mainList.employers[i] = name; 

			employersShopValue.textContent += mainList.employers[i] + ', ';
		}
});


let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},	
	open: true,
	discount: true,
	shopItems: [],
	discountPrice: function discountPrice () {
		if (mainList.discount === true) {
			price = price * 0.8;
			alert('Ваша цена со скидкой: ' + price);
		} else {
			alert ('Ваша цена: ' + price);
		} 
	}
	
};