(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
	
	let tab = require('../parts/tab.js');
	let modal = require('../parts/modal.js');
	let slider = require('../parts/slider.js');
	let ajax = require('../parts/ajax.js');
	let calc = require('../parts/calc.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	slider();
	ajax();
	calc();
	timer();


});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function calc () {

let person = document.getElementsByClassName('counter-block-input')[0],
	days = document.getElementsByClassName('counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personSum = 0,
	daysSum = 0,
	total = 0;

	totalValue.innerHTML = 0;


	person.addEventListener('change', function() {
		personSum = +this.value;
		total = (personSum + daysSum)*10000;
		if (days.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	days.addEventListener('change', function() {
		daysSum = +this.value;
		total = (personSum + daysSum)*10000;
		if (person.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function() {
		if (days.value == '' || person.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let price = total;
			totalValue.innerHTML = price * this.options[this.selectedIndex].value;
		}
	})

}

module.exports = calc;
},{}],4:[function(require,module,exports){
function modal() {

let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close'),
	moreTab = document.getElementsByClassName('description-btn');

more.addEventListener('click', function() {
	this.classList.add('more-splash');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
	overlay.style.display = 'none';
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
});


function showModalTab (n) {
	 moreTab[n].addEventListener ('click', function () {
		moreTab[n].classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	})
};

 for (i = 0; i < moreTab.length; i++) {
 	moreTab[i] = i;
 	showModalTab(i);
 }

}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider () {

let slideIndex = 1,
	slides = document.getElementsByClassName('slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	dots = document.getElementsByClassName('dot');


	showSlides (slideIndex);

	function showSlides (n) {
		if (n > slides.length) {
			slideIndex = 1;
		};

		if (n < 1) {
			slideIndex = slades.length;
		};

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};

		for (i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');

	}

	function plusSlide (n) {
		showSlides(slideIndex += n);
	};

	function currentSlide (n) {
		showSlides(slideIndex = n);
	};

	prev.addEventListener('click', function() {
		plusSlide(-1);
	});

	next.addEventListener('click', function() {
		plusSlide(1);
	})

	dotsWrap.addEventListener('click', function(event) {
		for (i = 0; i < dots.length + 1; i++ ) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});

}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab () {
	let tab = document.getElementsByClassName("info-header-tab"),
		info = document.querySelector('.info-header'),
		tabContent = document.getElementsByClassName('info-tabcontent');

	function hideTabContent (a) {
			for (i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		};

	hideTabContent (1);

	function showTabContent (b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');

		}
	};

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer () {
let deadLine = '2018-04-29';

function getTimeRemaining (endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t / 1000) % 60),
		minutes = Math.floor( (t / 1000 / 60) % 60),
		hours = Math.floor( (t / (1000 * 60 * 60)) );

	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};	

function setTime (id, endtime) {
	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		function updateClock () {
			let t = getTimeRemaining(endtime);
			if (t.hours < 10) {
			hours.innerHTML = '0' + t.hours;
			} else {
				hours.innerHTML = t.hours;
			};

			if (t.minutes < 10) {
			minutes.innerHTML = '0' + t.minutes;
			} else {
				minutes.innerHTML = t.minutes;
			};
			
			if (t.seconds < 10) {
			seconds.innerHTML = '0' + t.seconds;
			} else {
				seconds.innerHTML = t.seconds;
			};


			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		};

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);

};

setTime ('timer', deadLine);

}

module.exports = timer;
},{}]},{},[1]);
