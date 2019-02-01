// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "100px";
// }

$(document).ready(function () {
    $('.closebtn').click(function () {
        $('#mySidenav').toggleClass('toggle');
    });
});