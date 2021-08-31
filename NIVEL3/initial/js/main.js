$(function(){

	'use strict';

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#probootstrap-loader').length > 0) {
				$('#probootstrap-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		stagePadding: 5,
		navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
		responsive:{
			0:{
				items: 1
			},
			600:{
				items: 2
			},
			1000:{
				items: 3
			}
		}
	});



});