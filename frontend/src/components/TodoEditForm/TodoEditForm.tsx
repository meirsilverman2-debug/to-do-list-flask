import { useAtom } from "jotai";
import { useState } from "react";
import { editingTodoAtom, isAddingTodoAtom, todoDescriptionAtoms, todosAtom, todoTitleAtom } from "../../atoms/todoAtom";
import type { Todo } from "../../types/todo";
import { deleteTodo, updateTodo } from "../../services/todoService";
import TodoCard from "../TodoCard/TodoCard";
import { editCompletedAtom, editDescriptionAtom, editTitlAtom } from "../../atoms/editAtom";


interface TodoEditFormProps {
    todo: Todo
}

export default function TodoEditForm({todo}: TodoEditFormProps) {
  
  const [todos, setTodos] = useAtom(todosAtom);
  const [editingTodoId, setEditingTodoId] = useAtom(editingTodoAtom);
  const [editTitle, setEditTitle] = useAtom(editTitlAtom);
  const [editingDescription, setEditingDescription] = useAtom(editDescriptionAtom);
  const [editingCompleted, setEditingCompleted] = useAtom(editCompletedAtom);
  

  async function handleSave(todoId: string) {
    try {
      const updatedTodo = await updateTodo(todoId, {
        title: editTitle,
        description: editingDescription,
        completed: editingCompleted,
      });

      setTodos((currentTodos) =>
        currentTodos.map((todo) => (todo.id === todoId ? updatedTodo : todo)),
      );

      setEditingTodoId(null);
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  }

  function handelEditClick(todo: Todo) {
    setEditingTodoId(todo.id);
    setEditTitle(todo.title);
    setEditingDescription(todo.description ?? "");
    setEditingCompleted(todo.completed);
  }

  async function handlDelete(todoId: string) {
    try {
      await deleteTodo(todoId);

      setTodos((currentTodos) =>
        currentTodos.filter((todo) => todo.id !== todoId),
      );
    } catch (error) {
      console.error("Failed to delete todo;", error);
    }
  }



  
  return (
  <div>
    <div className="todo-action">

              
              <button
                className="btn btn-danger"
                onClick={() => handlDelete(todo.id)}
              >
                Delete
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => handelEditClick(todo)}
              >
                EDIT
              </button>
            </div>



             {editingTodoId === todo.id ? (
              <div className="todo-edit-form">
                <label>
                  Title:
                  <input
                    className="input"
                    type="text"
                    value={editTitle}
                    placeholder="Enter a title"
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </label>

                <label>
                  Description:
                  <input
                    className="input"
                    type="text"
                    value={editingDescription}
                    placeholder="Enter a description"
                    onChange={(e) => setEditingDescription(e.target.value)}
                  />
                </label>

                <label>
                  Completed:
                  <input
                    className="input"
                    type="checkbox"
                    checked={editingCompleted}
                    onChange={(e) => setEditingCompleted(e.target.checked)}
                  />
                </label>

                <button
                  className="btn btn-primary "
                  onClick={() => handleSave(todo.id)}
                >
                  SAVE
                </button>
                <button
                className="btn btn-secondary"
                onClick={() => {
                  setEditingTodoId(null);
                  setEditTitle("");
                  setEditingDescription("");
                  setEditingCompleted(false)
                }}
                >
                  CANCEL
                </button>
              </div>
            ) : (
              <></>
            )}

    
  </div>
  )
}
