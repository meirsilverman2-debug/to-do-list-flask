import { atom } from "jotai";

export const isAddingTodoAtom = atom<boolean>(false);

export const editingTodoAtom = atom<string | null>(null);