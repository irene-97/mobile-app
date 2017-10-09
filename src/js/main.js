svg4everybody();

// @include('detect.js')
// @include('globals.js')

$('.slider .container').slick({
	dots: true,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
});
