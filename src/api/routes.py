"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import json
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role, Salary
from api.utils import generate_sitemap, APIException
from flask_cors import CORS, cross_origin
from flask_jwt_extended import JWTManager, jwt_required, create_access_token,get_jwt_identity



api = Blueprint('api', __name__)


# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#-----------------------------------------------ENDPOINTS PARA USUARIO------------------------------------------------------------#

#-------------------------REGISTRO--------------------------#

@api.route('/register', methods=['POST'])
def register_user():
    try:

        data = request.json
        email = data.get('email')
        password = data.get('password')
        role = data.get('role')

        # Verificar si el email ya está registrado
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({'error': 'El correo electrónico ya está registrado'}), 400

        # Crear un nuevo usuario
        new_user = User(email=email, password=password, role=role)
        db.session.add(new_user)
        db.session.commit()

        access_token = create_access_token(identity=email)

        return jsonify({
            'success': True,
            'message': 'Usuario registrado exitosamente',
            'access_token': access_token,
            'id': new_user.id
        }), 201

    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 400


#------------------------------------------------------------------------#
