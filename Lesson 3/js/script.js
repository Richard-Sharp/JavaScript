let	money,
	name,
	time,
	price = 3000;


function start () {
	money = prompt('Ваш бюджет на месяц?');

	while (isNaN(money) || money == "" || money == null) {
		money = prompt('Ваш бюджет на месяц?');
	}
		name = prompt('Название вашего магазина?').toUpperCase();
		
		time = 7;
}
start ();
let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},	
		open: true,
		discount: true
}



function choosGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt('Что будем продавать?');

		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50 ) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
		} else {
			alert ('Значение введено некорректно!');
			i--;
		}
	}
}

choosGoods ();

function workTime (time) {

if (time < 21 && time >= 9) {
	alert ('Время работать!')
	} else if (time < 9 || time >= 21) {
		alert("Мы еще закрыты!")
		} else if (time > 24) {
			alert("На нашей планете в сутка всего 24 часа!")
			} else { 
				alert ("Такого времени не может быть...") 
				}
}

workTime (14);


function moneyDay () {
	console.log(mainList.budget / 30);
	alert('Ваш бюджет на день: ' + mainList.budget / 30);
}

moneyDay ();

function discountPrice () {
	if (mainList.discount === true) {
		price = price * 0.8;
		alert('Ваша цена со скидкой: ' + price);
	} else {
		alert ('Ваша цена: ' + price)
	} 
}
discountPrice ();


function employers () {
function employerWork (number, employerName) {		
	this.number = number;
	this.employerName = employerName;
}

for (i = 1; i < 5; i++) {
	let employerName = prompt ("Введите имя сотрудника:"); 
	let employer = new employerWork (i, employerName);
	console.log (employer);
}
}
employers ();
console.log(mainList);
