import { Button } from "@mantine/core";
import { useNavigate } from "react-router";

export default function LinkButtonToTodoList() {
    const navigate = useNavigate();
  return (
    <div>
      <Button color="purple" onClick={() => navigate("/TodoList")}>Go to todoList</Button>
    </div>
  );
}
