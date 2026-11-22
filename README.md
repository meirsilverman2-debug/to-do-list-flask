"# to-do-list-flask" 
---
## How to run the backend:
---
```
flask --app main:app run --debug
```
---
## How to run the frontend:
---
```
npm run dev
```
---
## DAL oppretions:
---

* get_all_todos(): 
```
GET all todos that exist
```
* get_todo_by_id(): 
```
GET by ID which gets the todo or 400
```
* create_todo(): 
```
POST which adds a new todo meaning it creats one
```
* update_todo():
``` 
PUT updates a already existed todo by ID or 404
```
* delete_todo(): 
```
DELETE deletes todo by ID or 404
```
