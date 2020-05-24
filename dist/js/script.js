$(document).ready(function () {

	//Showcase

	$('.works__list-item').each(function (i) {
		$(this).on('click', function () {
			$('.overlay, .portfolio').fadeIn('slow');
			$('.portfolio__project-name').text($('.portfolio__item-name').eq(i).text());
			$('.portfolio__project-dates').text($('.portfolio__item-dates').eq(i).text());
			$('.portfolio__project-desc').text($('.portfolio__item-desc').eq(i).text());
			$('.portolio__stack-desc').text($('.portfolio__item-stack').eq(i).text());

			$('.portfolio__link .button').attr('href', $('.portfolio__item-link').eq(i).text());

			$('.portfolio #portfolio__img').addClass('works__list-item_' + (i + 1));

		});
	});

	$('.portfolio__close').on('click', function () {
		$('.overlay, .portfolio').fadeOut('slow');
		$('.portfolio #portfolio__img').removeClass();
	});

	$(this).keydown(function (eventObject) {
		if (eventObject.which == 27)
			$('.overlay, .portfolio').fadeOut('slow');
		$('.portfolio #portfolio__img').removeClass();
	});

	$(document).mouseup(function (e) { // событие клика по веб-документу
		const div = $(".portfolio"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.overlay, .portfolio').fadeOut('slow');
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

});  