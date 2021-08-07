from flask import Flask
from flask_restful import Api, Resource
from constants import *
from config import *
from models import db
from services import covid
from flask_cors import CORS, cross_origin



# app configuration
app = Flask(__name__)
api = Api(app)
CORS(app, support_credentials=True)

# database configuration
app.config[SQL_DATABASE_URL_LABEL] = DATABASE_URL
db.init_app(app)


# controllers
class CovidModel(Resource):
    def get(self):
        data = covid.confirmed_cases()

        return {'data': str(data)}


api.add_resource(CovidModel, "/covid")

if __name__ == '__main__':
    app.run()
