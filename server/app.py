from flask import Flask
from flask_restful import Api, Resource
from constants import *
from config import *
from models import db

# app configuration
app = Flask(__name__)
api = Api(app)

# database configuration
app.config[SQL_DATABASE_URL_LABEL] = DATABASE_URL
db.init_app(app)


# controllers
class CovidModel(Resource):
    def get(self):
        return {'1': 'Hello World!'}


api.add_resource(CovidModel, "/covid")

if __name__ == '__main__':
    app.run()
