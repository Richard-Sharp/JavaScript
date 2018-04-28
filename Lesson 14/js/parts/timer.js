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