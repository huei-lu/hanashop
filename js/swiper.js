var TrandingSlider = new Swiper('.tranding-slider', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 3,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.shuffle_a',
		// prevEl: '.swiper-button-prev',
	}
});