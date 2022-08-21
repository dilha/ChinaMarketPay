$(function () {

    let header = $('.header');
    let scrollOffset = 0;

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= 20) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
    });

    $('.burger').on('click', () => {
        $('.burger').toggleClass('burger--active');
        $('.header__menu').toggleClass('active');
    })

    $('.header__nav-link').on('click', () => {
        $('.burger').removeClass('burger--active');
        $('.header__menu').removeClass('active');
    })

});
