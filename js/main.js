$(document).ready(function () {
    $('.btn-menu').click(function () {
        $('.sidenav').toggleClass('open');
        $('.menu>.menu__list>li>a').toggleClass('toggle');
    });
});