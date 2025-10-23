"use client";

import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import type { Todo } from './types';

let nextId = 3;
const initialTodos: Todo[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  function handleAddTodo(title: string) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo: Todo) {
    setTodos(
      todos.map((t) => (t.id === nextTodo.id ? { ...t, ...nextTodo } : t))
    );
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
