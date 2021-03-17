import React from "react";
import Todo from "./Todo";
import './App.css';

const TodoList = (props) => {
    return (
        <ul className='list-wrapper'>
            {props.tasks.map((todo, index) => {
                return <Todo
                    todo={todo}
                    key={todo.id}
                    index={index}
                    onDelete={props.onDelete}
                />
            })}
        </ul>
    )

}
export default TodoList;
