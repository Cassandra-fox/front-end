export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export type AddTodoHandler = (title: string) => void;
export type ChangeTodoHandler = (todo: Todo) => void;
export type DeleteTodoHandler = (id: number) => void;
