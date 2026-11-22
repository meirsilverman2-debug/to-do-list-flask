# DRY (if you know you know!):

class Utils:
    @staticmethod
    def _modify_todo_id(todo):
        if todo is None:
            return None

        todo = dict(todo)
        todo["id"] = str(todo.pop("_id"))

        return todo