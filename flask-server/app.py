# from flask import Flask
# app = Flask(__name__)

# from index import index

# app.register_blueprint(index)

import os
from flask import Flask, send_from_directory, render_template

app = Flask(__name__, static_folder="../react-app/build/static", template_folder="../react-app/build")

# Serve React App
@app.route('/')
def serve():
    # send_from_directory(app.static_folder, 'index.html')
    return render_template('index.html')