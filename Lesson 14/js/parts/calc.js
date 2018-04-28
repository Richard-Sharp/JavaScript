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