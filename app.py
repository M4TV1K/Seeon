from flask import Flask, render_template, request, redirect, session

application = Flask(__name__)


@application.route('/')
def index():
    return render_template('index.html', contact=True)


@application.route('/we')
def we():
    return render_template('we.html', contact=True)


@application.route('/vacations', methods=['GET', 'POST'])
def vacations():
    if request.method == 'POST':
        return redirect('/thank_you')
    return render_template('vacations.html', contact=True)


@application.route('/contacts')
def contacts():
    return render_template('index.html', contact=True, to_contact=True)


@application.route('/brief', methods=['GET', 'POST'])
def brief():
    if request.method == 'POST':
        return redirect('/thank_you')
    return render_template('brief.html')


@application.route('/thank_you')
def thank_you():
    return render_template('thank_you.html')


# @application.errorhandler(NotFound)
# def page_not_found(e):
#     return redirect('/sex')
#
#
# @application.errorhandler(binascii.Error)
# def page_not_found(e):
#     return redirect('/sex')
#
#
# @application.errorhandler(UnicodeDecodeError)
# def page_not_found(e):
#     return redirect('/sex')


if __name__ == '__main__':
    application.debug = True
    application.run(host='192.168.0.59', port=5000)
