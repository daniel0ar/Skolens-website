$(window).scroll(function () {
    if ($(document).scrollTop() > 70) {
        $('.navbar').addClass('affix');

    } else {
        $('.navbar').removeClass('affix');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $('.navbar').toggleClass('bg-black');
});