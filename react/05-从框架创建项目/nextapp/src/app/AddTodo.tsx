import { useState } from 'react';
import type { AddTodoHandler } from './types';

type Props = { onAddTodo: AddTodoHandler };

export default function AddTodo({ onAddTodo }: Props) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>添加</button>
    </>
  )
}
