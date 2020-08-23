from flask import Flask, render_template, request, redirect
from flask_mail import Mail, Message

application = Flask(__name__)

application.config['MAIL_SERVER'] = 'smtp.mail.ru'
application.config['MAIL_PORT'] = 465
# application.config['MAIL_USE_SSL'] = False
application.config['USER_ENABLE_AUTH0'] = True
application.config['MAIL_USERNAME'] = 'info@seeonstudio.com'
application.config['MAIL_PASSWORD'] = 'SeeonMoney2020'
application.config['MAIL_DEFAULT_SENDER'] = 'info@seeonstudio.com'
mail = Mail(application)


@application.route('/')
def index():
    return render_template('index.html', contact=True)


@application.route('/we')
def we():
    return render_template('we.html', contact=True)


@application.route('/vacations', methods=['GET', 'POST'])
def vacations():
    if request.method == 'POST':
        msg = Message('New Employee', recipients=[application.config['MAIL_DEFAULT_SENDER']])
        msg.html = render_template(
            'mail/employee.html',
            sending_mail=True,
            name=request.form['name'],
            number=request.form['number'],
            email=request.form['email'],
            target=request.form['request']
        )
        mail.send(msg)
        return redirect('/thank_you')
    return render_template('vacations.html', contact=True)


@application.route('/contacts')
def contacts():
    return render_template('index.html', contact=True, to_contact=True)


@application.route('/brief', methods=['GET', 'POST'])
def brief():
    if request.method == 'POST':
        msg = Message('New Order', recipients=[application.config['MAIL_DEFAULT_SENDER']])
        msg.html = render_template(
            'mail/order.html',
            sending_mail=True,
            name=request.form['name'],
            number=request.form['number'],
            contact_via=request.form['contact-via'],
            email=request.form['email'],
            service=request.form['service'],
            budget=request.form['budget'],
            target=request.form['request']
        )
        mail.send(msg)
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
