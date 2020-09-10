
function adaptForMobile() {
    if (window.innerWidth > 550) {
        $('#weCreateHeader').css("left", "25vw");
        $('#weCreateHeader2').css("left", "125vw");
    }
    else {
        $('#weCreateHeader').css("left", "25vw");
        $('#weCreateHeader2').css("left", "115vw");
    }
}

$(document).ready(() => {
    scrollText('weCreateHeader');
    scrollText('weCreateHeader2');
    adaptForMobile();
});

$(window).resize(adaptForMobile);