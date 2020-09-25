//Кнопка вверх
$(window).scroll(function () {
    let scroll_height = $(window).height();

    if ($(this).scrollTop() >= 100) {
        $('.to_top').fadeIn();
    } else {
        $('.to_top').fadeOut();
    }
});

$('.to_top').click(function(){
    $("html, body").animate({scrollTop: 0}, 500);
});

//Online - Offline
$(document).ready(function () {

    let d = new Date();
    let myDate = d.getHours();
    let myText = document.getElementById('myText');
    let userName;

    function myAlert() {
        userName = prompt('Hey, What is your name??', '');
        if (userName) {
            alert('Hello '+ userName +', nice to meet you, my name is Roman, I am a junior strong frontend developer, and I am looking for a job now, if you have an offer for me, I am always here from 10 to 19 hours, or you can send me an email and I will reply soon. Thank you!')
        }
        else {
            alert('Ok, Welcome to my site!');
        }
    }

    if (myDate >= 10 && myDate < 19) {
        myText.innerHTML = 'Online';
        $('#myText').addClass('online');
        $('#myText').removeClass('offline');
    }
    else {
        myText.innerHTML = 'Offline';
        $('#myText').addClass('offline');
        $('#myText').removeClass('online');
        setTimeout(myAlert, 2000);
    }

});
