from bson import ObjectId
from database.db import todos_collection
from pymongo import ReturnDocument
from utils.utils_function import Utils

class TodosDal:


    # GET (all):
    @staticmethod
    def get_all_todos():

        todos = list(todos_collection.find())

        todo = list(map(Utils._modify_todo_id, todos))
        

        return todo


    # GET (by id):
    @staticmethod
    def get_todo_by_id(todo_id):
        if not ObjectId.is_valid(todo_id):
            return None

        todo = todos_collection.find_one({
            "_id": ObjectId(todo_id)
        })

        return Utils._modify_todo_id(todo)


    # POST:
    @staticmethod
    def create_todo(todo_data):
        todo = dict(todo_data)
        result = todos_collection.insert_one(todo)

        todo.pop("_id", None)
        todo["id"] = str(result.inserted_id)

        return todo


    # UPDATE:
    @staticmethod
    def update_todo(todo_id, update_data):
        if not ObjectId.is_valid(todo_id):
            return None

        todo = todos_collection.find_one_and_update(
            {"_id": ObjectId(todo_id)},
            {"$set": update_data},
            return_document = ReturnDocument.AFTER
        )

        return Utils._modify_todo_id(todo)


    # DELETE:
    @staticmethod
    def delete_todo(todo_id):
        if not ObjectId.is_valid(todo_id):
            return None
    
        todo = todos_collection.find_one_and_delete({
            "_id": ObjectId(todo_id)
        })

        return Utils._modify_todo_id(todo)

