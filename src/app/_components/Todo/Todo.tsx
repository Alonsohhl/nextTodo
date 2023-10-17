import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface TodoProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo }) => {
  return (
    <ListItem key={todo.id}>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <ListItemText primary={todo.text} />

    </ListItem>
  );
};

export default Todo;
