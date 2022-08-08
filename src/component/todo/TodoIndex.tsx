import * as React from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { Todo } from '../../pages/Home/project/todo.model';

const TodoIndex = (props: any) => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            { id: Math.random().toString(), text: text }
          ]);

        console.log(text);
      };


    // console.log(InputMenue);
    return (
        <div>
            <TodoList items={todos} />
            <NewTodo onAddTodo={todoAddHandler} />
        </div>
    )
}

export default TodoIndex; 
