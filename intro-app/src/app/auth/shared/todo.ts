export interface Todo {
  id: string;
  userId: string;
  completed: boolean;
  title: string;
}

export interface NewTodo {
  userId: string;
  completed: boolean;
  title: string;
}
