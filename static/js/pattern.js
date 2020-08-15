
function openPage(link = "") {
    window.location.href = '/' + link;
}

function openInNewTab(url) {
    const win = window.open(url,'_blank');
    win.focus();
}

function addLogoHover() {
    $('#logo').hover(() => {
        $('#logo').attr("src", "../static/img/logo-hover.svg");
    }, () => {
        $('#logo').attr("src", "../static/img/logo.svg");
    });
}

function addZoomInOutHover(element, imgIn = 'none', imgOut = 'none') {
    $(element + "Holder").hover(() => {
        if (imgIn !== "none") $(element).attr("src", "../static/img/" + imgIn + ".svg");
        $(element + "Holder").animate({
            width: "+=0.4vw",
            height: "+=0.4vw"
        }, 100);
    }, () => {
        if (imgOut !== 'none') $(element).attr("src", "../static/img/" + imgOut + ".svg");
        $(element + "Holder").animate({
            width: "-=0.4vw",
            height: "-=0.4vw"
        }, 100);
    });
}

$(document).ready(() => {
    addZoomInOutHover('#chatButton', 'chat-button-hover', 'chat-button');
    addZoomInOutHover('#instaButtonMenu');
    addZoomInOutHover('#fbButtonMenu');
    addZoomInOutHover('#telegramButtonMenu');
    addZoomInOutHover('#whatButtonMenu');
    addZoomInOutHover('.insta-button', 'insta-hover', 'insta');
    addZoomInOutHover('.fb-button','fb-hover','fb');
    addZoomInOutHover('.what-button','what-hover', 'what');
    addZoomInOutHover('.telegram-button', 'telegram-hover', 'telegram');
    $('#chatButtonHolder').click(() => {
        // TODO ACTIVATE CHAT OR WHATEVER
        alert('CHAT')
    });
    addLogoHover();

    $('#menuButton').click(() => {
        if ($('#menuHolder').css('display') === 'none') {
            $('#pageContent, #footer').css('display', 'none');
            $('#interface').css('display', 'none');
            $('#chatHolder').css('display', 'none');
            $('#menuHolder').css('display', 'flex');
            $('#menuSpreader').animate({
                width: '100vw'
            }, {
                duration: 420,
                complete: () => {
                    $('#logo').attr('src', '../static/img/logo-menu.svg')
                        .unbind('mouseenter mouseleave')
                    $('#startProject').removeClass('orange-button').addClass('white-button');

                    $('#interface').fadeIn().css('display', 'flex');
                    $('#menu').fadeIn().css('display', 'flex');
                    $('#menuLine1')
                        .animate(
                        { deg: 45 },
                        {
                            duration: 300,
                            step: function(now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                            }
                        });
                    $('#menuLine2')
                        .css('margin-top', '-1px')
                        .animate(
                        { deg: -45 },
                        {
                            duration: 300,
                            step: function(now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                            }
                        });
                }
            });
        }
        else {
            $('#interface').css('display', 'none');
            $('#menu').css('display', 'none');

            $('#menuSpreader').animate({
                width: '0'
            }, {
                duration: 420,
                complete: () => {
                    addLogoHover();
                    $('#logo').attr('src', '../static/img/logo.svg')
                    $('#startProject').removeClass('white-button').addClass('orange-button');

                    $('#interface').fadeIn().css('display', 'flex');
                    $('#menuHolder').css('display', 'none');
                    $('#pageContent, #footer').fadeIn().css('display', 'block');
                    $('#chatHolder').fadeIn().css('display', 'flex');
                    $('#menuLine1')
                        .animate(
                        { deg: 0 },
                        {
                            duration: 300,
                            step: function(now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                            }
                        });
                    $('#menuLine2')
                        .animate(
                        { deg: 0 },
                        {
                            duration: 300,
                            step: function(now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                            }
                        }).css('margin-top', '6px');
                }
            });
        }
    }).hover(() => {
        $('#menuButton').animate({
            width: "+=0.4vw",
            height: "+=0.4vw",
            left: "-=0.2vw"
        }, 100)
    },() => {
        $('#menuButton').animate({
            width: "-=0.4vw",
            height: "-=0.4vw",
            left: "+=0.2vw"
        }, 100)
    });
});
