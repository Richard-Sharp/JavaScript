function form () {
let massage = new Object();
massage.loading = 'Зфгрузка...';
massage.success = 'ваши данные успешно отправлены';
massage.failure = 'Что-то пошло не так...';

let form = document.getElementsByClassName('main-form')[0],
	input = form.getElementsByTagName('input'),
	formContact = document.getElementById("form"),
	inputContact = formContact.getElementsByTagName("input"),
	statusMassage = document.createElement('div');
	statusMassage.classList.add('status');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	form.appendChild(statusMassage);	
}

module.exports = form;