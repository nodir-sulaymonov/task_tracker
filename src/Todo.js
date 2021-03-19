import React, {useContext} from "react";
import Context from "./context";
import './App.css';
const Todo = (props) => {
    const { handleDelete } = useContext(Context)
    const titleItem = props.todo.title;
    return (
        <li className='list-item'>
            <strong>{props.index + 1}</strong>
            &nbsp;
            {titleItem}
            <button
                className="delete is-pulled-right"
                onClick={() => {handleDelete(props.todo.id)}}>
            </button>
        </li>
    );
}

export default Todo;
