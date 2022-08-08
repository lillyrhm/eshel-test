import * as React from 'react';
import { useRef } from 'react';
import { Input, Label } from '../../constant/constant';
// import useLocalStorage from '../../hooks/useLocalStoreg';

/// میتوان از type  و interface استفاده کنیم تفاوتی ندارد

// interface newTodoProps {
//     onAddTodo: {
//         todotext: string;
//     }[];
// }
type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
  };

// type InputProps = {
//     onAddData: (todoText: string) => void;
//     title?: string;
//     ref?: Function;
//     placeholder?: string;
// };

// const BasicInput: React.FC<InputProps> = (props) => {

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
        props.onAddTodo(enteredText);
    };

    return (
        <div>

            <form onSubmit={todoSubmitHandler}>
            <label htmlFor="todo-text">Todo Text</label>
                < Input type='text' id='todo-text' ref={textInputRef} />
                <button type='submit'>ADD TODO</button>
            </form>

        </div>
    )
}

export default NewTodo;














































// import * as React from 'react';
// import { useRef } from 'react';

// /// میتوان از type  و interface استفاده کنیم تفاوتی ندارد

// // interface newTodoProps {
// //     onAddTodo: {
// //         todotext: string;
// //     }[];
// // }

// type NewTodoProps = {
//     onAddTodo: (todoText: string) => void;
// };

// const NewTodo: React.FC<NewTodoProps> = (props) => {
//     const textInputRef = useRef<HTMLInputElement>(null);


//     const todoSubmitHandeler = (event: React.FormEvent) => {
//         event.preventDefault()
//         const enteredText = textInputRef.current.value;
//         props.onAddTodo(enteredText);
//         console.log(enteredText);
//     }
//     return (
//         <div>

//             <form onSubmit={todoSubmitHandeler}>
//                 <label htmlFor='todo-text'>todo text</label>
//                 <input type='text' id='todo-text' ref={textInputRef} />
//                 <button type='submit'>ADD TODO</button>
//             </form>

//         </div>
//     )
// }

// export default NewTodo;
