
function exitFullscreen() {
    $('#cross').css('display', 'none');
    $('#showreelVideo')
        .prop('muted', true)
        .css({
            width: '36vw',
        }, 500);
}

$(document).ready(() => {
    $('#showreelVideo').prop('muted', true);
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
    }).click(() => {
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
                });
            $('#cross').css('display', 'block');
        }
    });

    $('#cross').click(() => {
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
    });
    document.addEventListener("fullscreenchange",() => {
        if(!document.fullscreenElement) exitFullscreen();
    }, false);
})

$(window).scroll(() => {
    if (window.scrollY > 400) $('#scrollDownHolder').fadeOut();
});