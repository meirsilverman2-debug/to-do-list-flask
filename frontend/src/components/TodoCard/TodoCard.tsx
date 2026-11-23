import type { Todo } from "../../types/todo";
import TodoEditForm from "../TodoEditForm/TodoEditForm";
import "./todoCard.css"

interface TodoCardProps {
    todo: Todo
}



export default function TodoCard({todo}: TodoCardProps) {
  return (
    <div>
      <h1>Title: {todo.title}</h1>
      <p>descrption: {todo.description}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <TodoEditForm todo={todo}/>
    </div>
  );
}
