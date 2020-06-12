$(document).ready(function () {
	//Contact me

	$('.header__button-contact').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.contact').slideDown('slow');
	});
	$('.cooperation__button-contact').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.contact').slideDown('slow');
	});
	$('.contact__close').on('click', function () {
		$('.overlay, .contact').fadeOut('slow');
	});

	//Showcase - General

	$('.works__list-item').each(function (i) {
		$(this).on('click', function () {
			$('.overlay, .portfolio').fadeIn('slow');
			// $('.portfolio__project-name').text($('.portfolio__item-name').eq(i).text());
			$('.portfolio__project-name').text($(this).children('.works__pf-content').children('.works__project-name').text());
			// $('.portfolio__project-dates').text($('.portfolio__item-dates').eq(i).text());
			$('.portfolio__project-dates').text($(this).children('.works__pf-content').children('.works__project-dates').text());
			// $('.portfolio__project-desc').text($('.portfolio__item-desc').eq(i).text());
			$('.portfolio__project-desc').text($(this).children('.works__pf-content').children('.works__project-description').text());
			// $('.portolio__stack-desc').text($('.portfolio__item-stack').eq(i).text());
			$('.portolio__stack-desc').text($(this).children('.works__pf-content').children('.works__project-stack').text());
			// $('.portfolio__link .button').attr('href', $('.portfolio__item-link').eq(i).text());
			$('.portfolio__link .button').attr('href', $(this).children('.works__pf-content').children('.works__project-link').text());
			// $('.portfolio #portfolio__img').addClass('works__list-item_x' + (i + 1));
			$('.portfolio #portfolio__img').attr('src', $(this).children('.works__pf-content').children('.works__project-img').text());
		});
	});

	$('.portfolio__close').on('click', function () {
		$('.overlay, .portfolio, .portfolio_sh').fadeOut('slow');
		$('.portfolio #portfolio__img').removeClass();
	});

	$(this).keydown(function (eventObject) {
		if (eventObject.which == 27)
			$('.overlay, .portfolio').fadeOut('slow');
		$('.portfolio #portfolio__img').removeClass();
	});

	$(document).mouseup(function (e) { // событие клика по веб-документу
		const div = $(".portfolio"); // тут указываем ID элемента
		const div1 = $(".contact");
		if (!div.is(e.target) && !div1.is(e.target) && div.has(e.target).length === 0 && div1.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.overlay, .portfolio, .contact').fadeOut('slow');
			$('.portfolio #portfolio__img').removeClass();
		}
	});

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

	//AJAX

	$('form').submit(function (e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('.contact').fadeOut();
			$('.overlay, .thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});

});  