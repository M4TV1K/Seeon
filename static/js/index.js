
$(document).ready(() => {
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
        alert('Showing showreel fullscreen');
    });
})