let	money,
	name,
	time,
	price = 3000;


function start () {
	money = prompt('Ваш бюджет на месяц?', '');

	while (isNaN(money) || money == "" || money == null) {
		money = prompt('Ваш бюджет на месяц?', '');
	}
		name = prompt('Название вашего магазина?', '').toUpperCase();
		
		time = 7;
}
start ();
let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},	
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 3; i++) {
	let a = prompt('Что будем продавать?', '');

			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
				console.log("Все верно!");
				mainList.shopGoods[i] = a;
			} else {
				alert ('Значение введено некорректно!');
				i--;
			}
		}
	},
	workTime: function workTime (time) {
	if (time < 21 && time >= 9) {
		alert ('Время работать!')
		mainList.open = true;
		} else if (time < 9 || time >= 21) {
			alert("Мы еще закрыты!");
			} else if (time > 24) {
				alert("На нашей планете в сутка всего 24 часа!")
				} else { 
					alert ("Такого времени не может быть...") 
					}
	},
	moneyDay: function moneyDay () {
		console.log(mainList.budget / 30);
		alert('Ваш бюджет на день: ' + mainList.budget / 30);
	},
	discountPrice: function discountPrice () {
		if (mainList.discount === true) {
			price = price * 0.8;
			alert('Ваша цена со скидкой: ' + price);
		} else {
			alert ('Ваша цена: ' + price)
		} 
	},
	employers: function employers () {
		for (i = 1; i < 5; i++) {
			let name = prompt ("Введите имя сотрудника:", '');
			mainList.employers[i] = name; 
		}
	},
	chooseShopItems: function chooseShopItems () {
		for (let i = 1; i < 2; i++) {
				let items = prompt ('Какой тип товаров будем продавать? (через запятую):', '');
				if ((typeof(items)) === 'string' && (typeof(items)) !== null && items !== '') {
					mainList.shopItems = items.split(",");
					let addItem = prompt("Хотите добавить что-нибудь еще?", "");
					if ((typeof(addItem)) !== null && addItem !== '') {
					mainList.shopItems.push(addItem);
					}
					mainList.shopItems.sort ();
				} else {
					alert ('Значение введено некорректно!');
					i--;
				}
		}
	}
}


function showItems () {
mainList.shopItems.forEach( function(items, i) {
	alert ("У нас вы можете купить:  " + i + ' - ' + items)
})
}

for (let key in mainList) {
	console.log ("Наш магазин включает в себя: " + key)
}
console.log (Object.keys(mainList).length);

console.log(mainList);
