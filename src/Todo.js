import React from "react";
import './App.css';
const Todo = (props) => {
    const titleItem = props.todo.title;
    return (
        <li className='list-item'>
            <strong>{props.index + 1}</strong>
            &nbsp;
            {titleItem.charAt(0).toUpperCase() + titleItem.slice(1)}
            <button
                className="delete is-pulled-right"
                onClick={() => {props.onDelete(props.id)}}>
            </button>
        </li>
    );
}

export default Todo;
