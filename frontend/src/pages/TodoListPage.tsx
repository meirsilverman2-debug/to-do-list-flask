
import TodoListDisplay from "../components/TodoListDisplay/TodoListDisplay";
import AddTodForm from "../components/AddTodoForm/AddTodForm";

export default function todoListPage() {
  return (
    <div>
      <AddTodForm />
      <TodoListDisplay />
    </div>
  );
}

