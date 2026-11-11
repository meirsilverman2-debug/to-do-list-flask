import { atom } from "jotai";
import type { Todo } from "../types/todo";

export const isAddingTodoAtom = atom<boolean>(false);

export const editingTodoAtom = atom<string | null>(null);

export const todosAtom = atom<Todo[] | []>([]);

export const todoTitleAtom = atom<string>("");

export const todoDescriptionAtoms = atom<string>("");












//  const [todos, setTodos] = useState<Todo[]>([]);
//   const [isAddTodo, setIsAddTodo] = useAtom(isAddingTodoAtom);
//   const [newTodoTitle, setNewTodoTitle] = useState<string>("");
//   const [newTodoDescription, setNewTodoDescription] = useState<string>("");
//   const [editingTodoId, setEditingTodoId] = useAtom(editingTodoAtom);
