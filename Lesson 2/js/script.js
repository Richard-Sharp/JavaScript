let	money = +prompt('Ваш бюджет на месяц?');
let shopName = prompt('Название вашего магазина?');

let mainList = {
		money,
		shopName,
		shopGoods: [],
		employers: {},	
		Open: true
}

for (let i = 0; i < 3; i++) {
	let a = prompt('Что будем продавать?');

	if ((typeof(a)) !== 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
		console.log("Все верно!");
		mainList.shopGoods[i] = a;
	} else {
		alert ('Значение введено некорректно!');
		i--;
	}
}


// let i = 0;

// // while (i < 3) {
// // 	let a = prompt('Что будем продавать?');
// // 	console.log("Все верно!");
// // 	mainList.shopGoods[i] = a;
// // 	i++;
// // }


// do {
// 	let a = prompt('Что будем продавать?');
// 	console.log("Все верно!");
// 	mainList.shopGoods[i] = a;
// 	i++;
// }
// while (i < 3);

console.log(mainList);
let moneyDay = money / 30;
console.log(moneyDay);
alert('Ваш бюджет на день: ' + moneyDay);
