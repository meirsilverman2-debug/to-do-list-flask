import { useAtom } from "jotai";
import { addTodo } from "../../services/todoService";
import { editingTodoAtom, isAddingTodoAtom, todoDescriptionAtoms, todosAtom, todoTitleAtom } from "../../atoms/todoAtom";
import ThemeCss from "../ThemeCss/ThemeCss";

export default function AddTodForm() {
  const [todos, setTodos] = useAtom(todosAtom);
  const [newTodoTitle, setNewTodoTitle] = useAtom(todoTitleAtom);
  const [newTodoDescription, setNewTodoDescription] = useAtom(todoDescriptionAtoms);
  const [isAddTodo, setIsAddTodo] = useAtom(isAddingTodoAtom);
  const [editingTodoId, setEditingTodoId] = useAtom(editingTodoAtom);

  async function handleAddTodo() {
    try {
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

 


  return (
    <div>
      <div className="app-container">
        <header className="todo-header">
          
          <div className="size-40 rounded-full bg-conic to-purple-400">
            <h1>My</h1>
            <h1>Todo</h1>
            <h1>List</h1>
          </div>

          <ThemeCss/>

          <button
            className="btn btn-primary"
            onClick={() => {
              setEditingTodoId(null);
              setIsAddTodo(true);
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
                onChange={(e) => setNewTodoTitle(e.target.value)}
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

            <button className="btn btn-primary" onClick={handleAddTodo}>
              ADD
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => {
                setIsAddTodo(false);
                setNewTodoTitle("");
                setNewTodoDescription("");
              }}
            >
              CANCEL
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
