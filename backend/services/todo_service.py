from flask import jsonify
from DAL.todo_dal import TodosDal

class TodoSSercice:

    # GET (all):
    @staticmethod
    def get_all_todos():
        result = TodosDal.get_all_todos()

        return jsonify(result), 200


    # GET (by id):
    @staticmethod
    def get_todo_by_id(todo_Id):
        result = TodosDal.get_todo_by_id(todo_Id)

        if result is None:
            return jsonify({"success": False, "error": "Not Found"}), 404
        

        return jsonify({"success": True, "result": result }), 200

    # POST:
    @staticmethod
    def create_todo(new_todo):
    
        if not new_todo or not new_todo.get("title"):
                return jsonify({"error": "Title is required"}), 400

        result = TodosDal.create_todo(new_todo)

        if result is None:
            return jsonify({"success": False, "message": "Fail to create todo"}), 400

        return jsonify({"success": True, "result": result}), 201


    # PATCH:
    @staticmethod
    def update_todo(todo_id, todo_data):

            if not todo_data:
                return jsonify({"error": "Update data is required"}), 400
        
            allowed_fields = {"title", "description", "completed"}
        
            if not set(todo_data).issubset(allowed_fields):
                return jsonify({"error": "Invalid fields"}), 400
        
            result = TodosDal.update_todo(todo_id, todo_data)
            
            if result is None:
                return jsonify({"success": False, "error": "Not Found"}), 404

            return jsonify({"success": True, "result": result}), 200


    # DELETE:
    @staticmethod
    def delete_todo(todo_id):
        result = TodosDal.delete_todo(todo_id)

        if result is None:
            return jsonify({"success": False, "error": "Not Found"}), 404
        

        return jsonify({"success": True, "result": result}), 200