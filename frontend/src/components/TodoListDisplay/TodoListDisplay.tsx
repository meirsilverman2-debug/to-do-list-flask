import { useEffect} from "react";
import type { Todo } from "../../types/todo";
import Spinner from "../Spinner/Spinner";
import TodoCard from "../TodoCard/TodoCard";
import { getAllTodos } from "../../services/todoService";
import { useAtom } from "jotai";
import { todosAtom } from "../../atoms/todoAtom";
import { loadingAtom } from "../../atoms/loadingTom";
import "./todoListDisplay.css"

export default function TodoListDisplay() {
    const [todos, setTodos] = useAtom(todosAtom);
    const [loading, setLoading] = useAtom(loadingAtom);
      
    useEffect(() => {
        async function loadTodos() {
            try {
                setLoading(true)
                const data = await getAllTodos();
                setTodos(data);
            } catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false)
            }
         
        }
    
        loadTodos();
      }, []);
    
    
  return (
    <div className="todo-grid">

           {loading ? (<Spinner/>) : todos.map((todo: Todo) => (
            <div  className={ todo.completed ? "dun" : "waiting"} key={todo.id}>
                <TodoCard todo={todo}/>

            </div>
           ))}
   
    </div>
             
)

}
