
let services = [];

function remove( element) {
    const index = services.indexOf(element)
    services.splice(index, 1)
}

function serviceButton(service = "", button = "") {
    if (!$('#' + button).hasClass("selected-button")) {
        $('#' + button).removeClass('select-button').addClass("selected-button");
        services.push(service);
    }
    else {
        $('#' + button).removeClass("selected-button").addClass("select-button")
        remove(service);
    }
}

function budgetButton(budget, option) {
    $('#budget').val(budget);
    $('.budget-button').removeClass('selected-button').addClass('select-button');
    $('#budget' + option).removeClass('select-button').addClass('selected-button');
}

function showError(element) {
    $('#' + element + 'Header').css('display', 'none');
    $('#' + element + 'Error').css('display', 'block');
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#' + element + 'Error').offset().top - 50
    }, 400);
    setTimeout(() => {
        $('#' + element + 'Error').css('display', 'none');
        $('#' + element + 'Header').css('display', 'block');
    }, 2500);
}

function focusIn(input) {
    if (!$('#' + input + 'Label').text().includes(':')) {
        $('#' + input + 'Label').animate({
            top: window.innerWidth > 1024 ? "-=1.2vw" : window.innerWidth > 550 ? "-=2.5vw" : "-=5vw",
            left: window.innerWidth > 1024 ? "-=0.5vw" : window.innerWidth > 550 ? "-=1vw" : "-=2vw",
            fontSize: "-=0.2vw"
        }, 200).text($('#' + input + 'Label').text() + ':');
    }
}

function focusInput(input) {
    $('#' + input)
        .click(() => {
            focusIn(input)
        })
        .on('keypress', (e) => {
            if (e.which === 13) {
                if (input === 'name') {
                    e.preventDefault()
                    $('#email').focus();
                }
                else if (input === 'email') {
                    e.preventDefault()
                    $('#number').focus();
                }
            }
        })
        .focusin(() => {
            focusIn(input)
        })
        .focusout(() => {
            if ($('#' + input).val() === "") {
                let text = $('#' + input + 'Label').text();
                text = text.substring(0, text.length - 1);
                $('#' + input + 'Label').animate({
                    top: window.innerWidth > 1024 ? "+=1.2vw" : window.innerWidth > 550 ? "+=2.5vw" : "+=5vw",
                    left: window.innerWidth > 1024 ? "+=0.5vw" : window.innerWidth > 550 ? "+=1vw" : "+=2vw",
                    fontSize: "+=0.2vw"
                }, 200).text(text);
            }
        });
}

$(document).ready(() => {
    focusInput('name');
    focusInput('email');
    focusInput('number');

    $("#submitRequest").click(() => {
        if (services.length === 0) {
            showError('service');
            return false;
        }
        if ($('#budget').val() === "") {
            showError('budget');
            return false;
        }

        let service = "";
        for (let i of services) {
            service += i + ",";
        }
        service = service.substring(0, service.length - 1);

        $('#service').val(service);
        $('#theForm').submit(true);
    })
});