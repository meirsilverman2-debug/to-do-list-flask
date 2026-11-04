import logging
from flask import Blueprint, jsonify, request
from services.todo_service import (
    get_all_todos_service,
    create_todo_service,
    get_todo_by_id_service,
    update_todo_service,
    delete_todo_service
    )

logger = logging.getLogger(__name__)

# Create Blueprint
todo_bp = Blueprint("todo", __name__, url_prefix="/todos")


# GET (all todos):
@todo_bp.route("/", methods=["GET"])
def get_all_todos_route():

    todos = get_all_todos_service()

    return jsonify(todos), 200


# GET (one todo by ID):
@todo_bp.route("/<todo_id>", methods=["GET"])
def get_todo_by_id_route(todo_id):
    todo = get_todo_by_id_service(todo_id)

    if todo is None:
        return jsonify({"error": "Todo not found"}), 404

    return jsonify(todo), 200


# POST create a new todo:
@todo_bp.route("/", methods=["POST"])
def create_todo_route():
    todo_data = request.get_json()

    if not todo_data or not todo_data.get("title"):
        return jsonify({"error": "Title is required"}), 400

    new_todo = create_todo_service(todo_data)

    return jsonify(new_todo), 201


# PATCH (update on existing todo)
@todo_bp.route("/<todo_id>", methods=["PATCH"])
def update_todo_route(todo_id):
    update_data = request.get_json()

    if not update_data:
        return jsonify({"error": "Update data is required"}), 400

    allowed_fields = {"title", "description", "completed"}

    if not set(update_data).issubset(allowed_fields):
        return jsonify({"error": "Invalid fields"}), 400

    updated_todo = update_todo_service(todo_id, update_data)

    if updated_todo is None:
        return jsonify({"error": "Todo not found"}), 404

    return jsonify(updated_todo), 200


# DELETED (delete an existing todo):
@todo_bp.route("/<todo_id>", methods=["DELETE"])
def delete_todo_route(todo_id):
    deleted_todo = delete_todo_service(todo_id)

    if deleted_todo is None:
        return jsonify({"error": "Todo not found"}), 404

    return jsonify({
        "message": "Todo deleted seccussfully",
        "todo": deleted_todo
    }), 200
    