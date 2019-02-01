// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "100px";
// }

$(document).ready(function () {
    // $('.closebtn').click(function () {
    //     $('#mySidenav').toggleClass('toggle');
    // });

    $('.closebtn').on({
        click: function () {
            $('#mySidenav').animate({
                'width': 200
            }, 600, 'easeInBack');
        }
    });


});