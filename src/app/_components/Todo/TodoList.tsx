// src/components/TodoList.tsx
import React from 'react';
import List from '@mui/material/List';
import Todo from './Todo';

interface TodoListProps {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </List>
  );
};

export default TodoList;
