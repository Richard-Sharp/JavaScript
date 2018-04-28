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