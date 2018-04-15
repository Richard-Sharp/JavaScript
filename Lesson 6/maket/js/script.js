let menuItem = document.getElementsByClassName('menu-item'),
	menu = document.getElementsByClassName ('menu')[0],
	menuItem1 = document.getElementsByClassName ('menu-item')[1],
	title = document.getElementById('title'),
	adv = document.getElementsByClassName ('adv'),
	body = document.querySelector ('body'),
	prompt1 = document.getElementById('prompt');

body.style.backgroundImage = 'url(img/apple_true.jpg)';
adv[0].remove();

menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(menuItem1, menuItem[2]);

let menuItem4 = document.createElement('li');
menuItem4.classList.add('menu-item');
menu.appendChild(menuItem4);
menuItem4.textContent = 'Пятый пункт';



title.textContent = 'Мы продаем только подлинную техниу Apple';

function question () {
let answer = prompt ('Ваше отношение к технике Apple?', '');
prompt1.textContent = answer;
}

setTimeout(question, 3000);




console.log(menuItem);