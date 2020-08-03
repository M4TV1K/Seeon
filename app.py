
from flask import Flask, render_template, request, redirect, session
from mysql.connector import Error

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.debug = True
    app.run(host='192.168.0.59', port=5000)
