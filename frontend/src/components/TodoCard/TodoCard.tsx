import type { Todo } from "../../types/todo";
import Count from "../Count/Count";
import SomthingMantain from "../SomthingMantain/SomthingMantain";
import TodoEditForm from "../TodoEditForm/TodoEditForm";



interface TodoCardProps {
    todo: Todo
}



export default function TodoCard({todo}: TodoCardProps) {
  return (
    <div>
    <Count/>
    <SomthingMantain/>
      <h1>Title: {todo.title}</h1>
      <p>descrption: {todo.description}</p>
      <p>Completed: {todo.completed}</p>
      <TodoEditForm todo={todo}/>
    </div>
  );
}
