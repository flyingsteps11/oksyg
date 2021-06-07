$(document).ready(function () {
    $('.call-back').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#popup').addClass('overlay-visible');
    });
    $('#popup .close').click(() => {
        document.body.style.overflowY = 'auto';
        document.querySelector('html').style.overflowY = 'auto';
        $('#popup').removeClass('overlay-visible');
    });
    $(document).mouseup(function (e) {
        var container = $("#popup");
        if (container.has(e.target).length === 0) {
            $('#popup').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });
    $(".input-tel").mask("+7(999)999-99-99");
    const owl = $('#farm-slider').owlCarousel({
        loop: true,
        dotsEach: true,
        dots: true,
        margin: 30,
        center: true,
        autoWidth: false,
        items: 3,
        dotsContainer: ".farm-slider__dots",
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            801: {
                items: 3,
            }
        }
    });
    $('.farm-slider-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.farm-slider-prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
    var element = document.querySelector('.menu__toggle');
    var header = document.querySelector('header');

    $('#menu__toggle').each(function () {
        if ($(this).prop('checked')) {
            header.style.background = '#49A069'
        }
    });
});