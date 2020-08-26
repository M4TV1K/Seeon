
function exitFullscreen() {
    $('#cross').css('display', 'none');
    $('#showreelVideo')
        .prop('muted', true)
        .css({
            width: '36vw',
            cursor: 'pointer',
            display: window.innerWidth > 1024 ? 'block' : 'none'
        }, 500);
}

function openVideo() {
    if ($('#showreelVideo').prop('muted') === true) {
        const elem = $('#videoHolder')[0];
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        $('#showreelVideo')
            .prop('muted', false)
            .css({
                width: '100%',
                height: '100%',
                cursor: "url('static/img/cross.svg'), auto",
                display: "block"
            })
            .get(0).play();
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
        exitFullscreen();
    }
}

$(document).ready(() => {
    $('#showreelVideo').click(openVideo);
    $('#playButtonHolder').hover(() => {
        $('#playButtonImg').attr("src", "../static/img/play-button-hover.svg");
        $('#playButtonHolder').animate({
            width: "+=2vw",
            height: "+=2vw",
            left: "-=1vw"
        }, 200);
    }, () => {
        $('#playButtonImg').attr("src", "../static/img/play-button.svg");
        $('#playButtonHolder').animate({
            width: "-=2vw",
            height: "-=2vw",
            left: "+=1vw"
        }, 200);
    }).click(openVideo);

    document.addEventListener("fullscreenchange",() => {
        if(!document.fullscreenElement) exitFullscreen();
    }, false);

    setTimeout(() => {
        $("#loaderHolder").fadeOut().css('display', 'none');
    },2000);
})

$(window).scroll(() => {
    if (window.scrollY > 400) $('#scrollDownHolder').fadeOut();
});