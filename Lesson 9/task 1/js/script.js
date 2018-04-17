window.addEventListener('DOMContentLoaded', () => {
	let tab = document.getElementsByClassName("info-header-tab"),
		info = document.querySelector('.info-header'),
		tabContent = document.getElementsByClassName('info-tabcontent');

	function hideTabContent (a) {
			for (i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}

	hideTabContent (1);

	function showTabContent (b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');

		}
	}

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

});

// Timer

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
}

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
			}

			if (t.minutes < 10) {
			minutes.innerHTML = '0' + t.minutes;
			} else {
				minutes.innerHTML = t.minutes;
			}
			
			if (t.seconds < 10) {
			seconds.innerHTML = '0' + t.seconds;
			} else {
				seconds.innerHTML = t.seconds;
			}


			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);

}

setTime ('timer', deadLine);


// Modal window

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
	});
}

 for (i = 0; i < moreTab.length; i++) {
 	moreTab[i] = i;
 	showModalTab(i);
 }