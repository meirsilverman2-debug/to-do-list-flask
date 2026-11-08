from flask import Flask
from flask_cors import CORS
from routes.todo_routes import todo_bp
import log.log_config

app = Flask(__name__)

CORS(
    app,
   supports_credentials=True
)


@app.route("/")
def home():
    return "Hello world!"

app.register_blueprint(todo_bp)

if __name__ == "__main__":
    app.run(host="127.0.0.1", debug=True, port=5000)