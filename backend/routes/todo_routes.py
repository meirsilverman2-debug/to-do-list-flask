import logging
from flask import Blueprint, jsonify, request
from services.todo_service import TodoSSercice

logger = logging.getLogger(__name__)

# Create Blueprint
todo_bp = Blueprint("todo", __name__, url_prefix="/todos")


# GET (all todos):
@todo_bp.get("/") # more advenced way by mordechai:
def get_all_todos_route():
    return TodoSSercice.get_all_todos()

  


# GET (one todo by ID):
@todo_bp.route("/<todo_id>", methods=["GET"])
def get_todo_by_id_route(todo_id):
   return TodoSSercice.get_todo_by_id(todo_id)


# POST create a new todo:
@todo_bp.route("/", methods=["POST"])
def create_todo_route():
    todo = request.get_json()
    return TodoSSercice.create_todo(todo)


# PATCH (update on existing todo)
@todo_bp.route("/<todo_id>", methods=["PATCH"])
def update_todo_route(todo_id):
   todo = request.get_json()
   return TodoSSercice.update_todo(todo_id, todo)




# DELETED (delete an existing todo):
@todo_bp.route("/<todo_id>", methods=["DELETE"])
def delete_todo_route(todo_id):
    return TodoSSercice.delete_todo(todo_id)

   
    
    
    