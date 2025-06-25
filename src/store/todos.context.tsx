import React, { useState } from "react";
import type { ReactNode } from "react";
import Todo from "../models/todo";

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  DeleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  DeleteTodo: () => {},
});

type Props = {
  children: ReactNode;
};

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    DeleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
