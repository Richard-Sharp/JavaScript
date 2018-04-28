$(document).ready(function () {
	$('.main_btna').on('click', function() {
		// $('.overlay').css({"display": "block"});
		$('.overlay').fadeIn(600);
		$('.modal').slideDown(500);
		$('.close').on('click', function() {
			$('.modal').slideUp(500);
			$('.overlay').fadeOut(500);
		})
		

});
	$('.main_btn').on('click', function() {
		$('.overlay').fadeIn(600);
		$('.modal').slideDown(500)
		$('.close').on('click', function() {
			$('.modal').slideUp(500);
			$('.overlay').fadeOut(500);
		})
});

	$('a[href = "#sheldure"]').on('click', function() {
		$('.overlay').fadeIn(600);
		$('.modal').slideDown(500)
		$('.close').on('click', function() {
			$('.modal').slideUp(500);
			$('.overlay').fadeOut(500);
		})
})

})