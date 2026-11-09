from bson import ObjectId
import logging
from database.db import todos_collection
from pymongo import ReturnDocument

logger = logging.getLogger(__name__)

# CRUD + ONE (meaning get by ID):

# 1 GET (all todos):
def get_all_todos_service():

    todos = list(todos_collection.find())

    for todo in todos:
        todo["id"] = str(todo.pop("_id"))

    return todos


# 2 GET (singal todo):
def get_todo_by_id_service(todo_id):
    if not ObjectId.is_valid(todo_id):
        return None

    todo = todos_collection.find_one({
        "_id": ObjectId(todo_id)
    })

    if todo is None:
        return None

    todo["id"] = str(todo.pop("_id"))

    return todo


# 3 POST (create todo):
def create_todo_service(todo_data):
    result = todos_collection.insert_one(todo_data)

    todo_data.pop("_id", None)
    todo_data["id"] = str(result.inserted_id)

    return todo_data


# 4 PATCH (update todo):
def update_todo_service(todo_id, update_data):
    if not ObjectId.is_valid(todo_id):
        return None

    todo = todos_collection.find_one_and_update(
        {"_id": ObjectId(todo_id)},
        {"$set": update_data},
        return_document = ReturnDocument.AFTER
    )

    if todo is None:
        return None

    todo["id"] = str(todo.pop("_id"))

    return todo


# 5 DELETE (delete todo):
def delete_todo_service(todo_id):
    if not ObjectId.is_valid(todo_id):
        return False
    

    todo = todos_collection.find_one_and_delete({
        "_id": ObjectId(todo_id)
    })

    if todo is None:
        return None

    todo["id"] = str(todo.pop("_id"))

    return todo


