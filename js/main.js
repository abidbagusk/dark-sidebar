$(document).ready(function () {
    $('.btn-menu').click(function () {
        $('.sidenav').toggleClass('open');
        $('.menu>.menu__list>li>a').toggleClass('toggle');
    });
    $('.btn-menu').click(function () {
        $('.social').slideToggle(900, 'swing');
    });
    $('.sidenav--on-mobile').click(function () {
        $(this).toggleClass('toggle-on-mobile');
        $('.btn-menu').toggle(400);
        $('.close').toggle(400);
    });
});