$(document).ready(function () {

	//Showcase

	/* 	$('[data-portfolio=showcase]').on('click', function () {
			$('.overlay, .portfolio').fadeIn('slow');
			$('#pi2').fadeIn('slow');
		}); */

	$('.works__list-item').each(function (i) {
		$(this).on('click', function () {
			$('.overlay, .portfolio').fadeIn('slow');
			$('.portfolio .portfolio__title').text($('.portfolio__item').eq(i).text());
			//$('.portfolio #portfolio__img').text($('.portfolio__item').eq(i).text());
			$('.portfolio #portfolio__img').addClass('works__list-item_' + (i + 1));

			//$('.overlay, .portfolio').fadeIn('slow');
		});
	});

	$('.portfolio__close').on('click', function () {
		$('.overlay, .portfolio').fadeOut('slow');
		$('.portfolio #portfolio__img').removeClass();
	});
	/* 
		$('.modal__close').on('click', function () {
			$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
		});
	
		$('.button_mini').each(function (i) {
			$(this).on('click', function () {
				$('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
				$('.overlay, #order').fadeIn('slow');
			});
		});
	 */
	//Smooth scroll and pageup

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1200) {
			$('.pageup').fadeIn('slow');
		}
		else {
			$('.pageup').fadeOut('slow');
		}
	});

	$("a[href^='#up']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	//Animation 
	new WOW().init();

});  