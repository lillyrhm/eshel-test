import * as React from 'react';
import NewTodo from './NewTodo';

interface TodoListProps {
    items: {
        id: string;
        text: string;
    }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const todos = [{ id: 't1', text: 'finish the course' }];

    return (
        <div>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}

                {props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>

        </div>
    )
}

export default TodoList;