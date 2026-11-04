import "./todoItem.css"

type TodoItemProps = {
   title: string;
   description: string
}


export default function TodoItem({title, description}: TodoItemProps) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  );
}


