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

});
