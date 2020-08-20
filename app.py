from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', contact=True)


@app.route('/we')
def we():
    return render_template('we.html', contact=True)


@app.route('/vacations', methods=['GET', 'POST'])
def vacations():
    if request.method == 'POST':
        return redirect('/thank_you')
    return render_template('vacations.html', contact=True)


@app.route('/brief', methods=['GET', 'POST'])
def brief():
    if request.method == 'POST':
        return redirect('/thank_you')
    return render_template('brief.html')


@app.route('/thank_you')
def thank_you():
    return render_template('thank_you.html')


# @app.errorhandler(NotFound)
# def page_not_found(e):
#     return redirect('/sex')
#
#
# @app.errorhandler(binascii.Error)
# def page_not_found(e):
#     return redirect('/sex')
#
#
# @app.errorhandler(UnicodeDecodeError)
# def page_not_found(e):
#     return redirect('/sex')


if __name__ == '__main__':
    app.debug = True
    app.run(host='192.168.0.59', port=5000)
