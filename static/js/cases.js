
let oldScroll, direction = true, speed = 3;

function animation() {
    if (animating) {
        if (direction) window.scrollBy(0, speed);
        else window.scrollBy(0, -speed);
        if ($(window).scrollTop() + $(window).height() + 75 >= $(document).height()) {
            changeDirection();
        }
        else if ($(window).scrollTop() === 0) changeDirection();
    }
    requestAnimationFrame(animation);
}

function changeDirection() {
    direction = !direction;
}

$(document).ready(() => {
    $("#logo").attr("src", "../static/img/logo-menu.svg");
    oldScroll = $(window).scrollTop();
    changeSpeed();
    requestAnimationFrame(animation);
});

function changeSpeed() {
    console.log(window.innerWidth);
    if (window.innerWidth > 550) speed = 3;
    else speed = 2;
}

$(window).resize(changeSpeed);

$(window).scroll(() => {
    if (oldScroll - $(window).scrollTop() >= 5) direction = false;
    else if (oldScroll - $(window).scrollTop() <= -5) direction = true;
    oldScroll = $(window).scrollTop();
});