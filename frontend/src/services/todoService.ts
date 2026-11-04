import axios from "axios";
import type { Todo } from "../types/todo";

const API_URL = "http://localhost:5000/todos/";


// GET (all todos):
export async function getAllTodos(): Promise<Todo[]>{
    const response = await axios.get<Todo[]>(`${API_URL}`);

    return response.data;
};


// DELETE (delete one todo by ID):
export async function deleteTodo(todoId: string){
    const response = await axios.delete(`${API_URL}${todoId}`);
    return response.data;
};


// UPDATE (updating one todo by ID):
export async function updateTodo(
    todoId: string,
    updateData: {title?: string; description?: string; completed?: boolean}
){
    const response = await axios.patch(
        `${API_URL}${todoId}`,
        updateData
    );

    return response.data;
};

// POST (creating one new todo):
export async function addTodo(
    todoData : Omit<Todo, "id">
): Promise<Todo> {
    const response = await axios.post(`${API_URL}`, todoData);

    return response.data;

};
