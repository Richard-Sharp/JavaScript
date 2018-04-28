function ajax() {

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

	//AJAX
	let request = new XMLHttpRequest(); 
	request.open("POST", 'server.php');

	request.setRequestHeader("content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(form);
	request.send(formData);

	request.onreadystatechange = function() {
		if (request.readyState < 4) {
			statusMassage.innerHTML = massage.loading;
		} else if (request.readyState === 4) {
			if (request.status == 200 && request.status < 300) {
				statusMassage.innerHTML = massage.success;
			} else {
				statusMassage.innerHTML = massage.failure;
			}
		}
	}
	for (i = 0; i < input.length; i++) {
		input[i].value = '';
	}
});

formContact.addEventListener('submit', function (event) {
	event.preventDefault();
	formContact.appendChild(statusMassage);

	//AJAX
	let request = new XMLHttpRequest(); 
	request.open("POST", 'server.php');

	request.setRequestHeader("content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(formContact);
	request.send(formData);

	request.onreadystatechange = function() {
		if (request.readyState < 4) {
			statusMassage.innerHTML = massage.loading;
		} else if (request.readyState === 4) {
			if (request.status == 200 && request.status < 300) {
				statusMassage.innerHTML = massage.success;
			} else {
				statusMassage.innerHTML = massage.failure;
			}
		}
	}
	
})	

}

module.exports = ajax;