import type { Todo } from "../../types/todo";
import Count from "../Count/Count";
import SomthingMantain from "../SomthingMantain/SomthingMantain";
import TodoEditForm from "../TodoEditForm/TodoEditForm";
import "./todoCard.css"

interface TodoCardProps {
    todo: Todo
}



export default function TodoCard({todo}: TodoCardProps) {
  return (
    <div className={todo.completed ? "dun" : "waiting"}>
    <Count/>
    <SomthingMantain/>
      <h1>Title: {todo.title}</h1>
      <p>descrption: {todo.description}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <TodoEditForm todo={todo}/>
    </div>
  );
}
