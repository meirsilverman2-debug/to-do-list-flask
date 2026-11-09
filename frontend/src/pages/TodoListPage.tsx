import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { editingTodoAtom, isAddingTodoAtom } from "../atoms/todoAtom";
import { addTodo, deleteTodo, getAllTodos, updateTodo } from "../services/todoService";
import { themeAtom } from "../atoms/themeAtom";
import Count from "../components/Count/Count";
import SomthingMantain from "../components/SomthingMantain/SomthingMantain";
import type { Todo } from "../types/todo";
import Spinner from "../components/Spinner/Spinner";

export default function TodoListPage() {
 
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isAddTodo, setIsAddTodo] = useAtom(isAddingTodoAtom)
  const [editingTodoId, setEditingTodoId] = useAtom(editingTodoAtom);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editingDescription, setEditingDescription] = useState<string>("");
  const [editingCompleted, setEditingCompleted] = useState<boolean>(false);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);


  // Add todo function:
  async function handleAddTodo() {
    try {
      console.log("bllllaaa");

      const newTodo = await addTodo({
        title: newTodoTitle,
        description: newTodoDescription,
        completed: false,
      });
      
      setTodos((currentTodos) => [...currentTodos, newTodo]);

      setNewTodoTitle("");
      setNewTodoDescription("");
      setIsAddTodo(false);
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  }


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
    setEditingDescription(todo.description?? "");
    setEditingCompleted(todo.completed);
  }

  useEffect(() => {
    async function loadTodos() {
      const data = await getAllTodos();
      setTodos(data);
    }

    loadTodos();
  }, []);

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

  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);


  return (
    <>
    <div className="app-container">
      <header className="todo-header">
        <div className="size-40 rounded-full bg-conic to-purple-400">
        <h1>My</h1>
        <h1>Todo</h1>
        <h1>List</h1>
        
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
        <button
        className="btn btn-primary"
        onClick={() => {
          setEditingTodoId(null);
          setIsAddTodo(true)
        }}
        >
        ADD TODO
        </button>
      </header>

      {isAddTodo && (
        <div className="todo-add-form">
          <h2>Add New Todo</h2>

          <label>
            Title:
            <input 
            type="text"
            value={newTodoTitle}
            onChange={(e) =>  setNewTodoTitle(e.target.value)}
            placeholder="Enter a title"
             />
          </label>

          <label>
            Description:
            <input 
            type="text"
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
            placeholder="Enter a description"
             />
          </label>

          <button
          className="btn btn-primary"
          onClick={handleAddTodo}
          >ADD
          </button>

          <button
          className="btn btn-secondary"
          onClick={() => {
            setIsAddTodo(false);
            setNewTodoTitle("")
            setNewTodoDescription("")
          }}
          >CANCEL
          </button>

        </div>
      )}


{/*=============================================
 This is map on each todo to create a card to it: 
 ===============================================*/}
        
      <div className="todo-grid">
        {todos.map((todo) => (
          <div className="todo-card" key={todo.id}>
            <Count/>
            <SomthingMantain/>
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
              <>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <p>Completed: {todo.completed ? "Yes" : "No"}</p>
              </>
            )}

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
          </div>
        ))}
      </div>
    </div>
    </>
  );
}



