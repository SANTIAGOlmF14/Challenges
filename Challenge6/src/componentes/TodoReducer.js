import { useReducer } from 'react';
import { todoReducer } from './TodoReducer';

const initialState = [{
    id: new Date().getTime(),
    description: 'hacer los challenges',
    done: false
}];

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>TodoApp</h1>
            <hr />
        </>
    );
};

