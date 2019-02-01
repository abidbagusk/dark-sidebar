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

    $('.openbtn').on({
        click: function () {
            $('#mySidenav').animate({
                'width': 200
            }, 600, 'easeInBack');
        }
    });
    $('.openbtn').click(function () {
        $(this).fadeOut(200, function () {
            $('.closebtn').fadeIn(300);
        });
    })

    $('.closebtn').on({
        click: function () {
            $('#mySidenav').animate({
                'width': 50
            }, 600, 'easeInBack');
        }
    });
    $('.closebtn').click(function () {
        $(this).fadeOut(200, function () {
            $('.openbtn').fadeIn(300);
        });
    })



});