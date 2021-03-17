import React, {useEffect, useState} from "react";
import Header from "./Headerjs";
import TodoList from "./TodoList";
import SubmitForm from "./SubmitForm";
import './App.css';
import 'bulma/css/bulma.css';

function App () {

    const [tasks, setTask] = useState([]);
    const [color, setColor] = useState(false);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
            .then(response => response.json())
            .then(task =>{
                setTask(task)
            })
    },[])

    function handleChangeColor () {
       setColor(!color);
    }

    function handleSubmit (event) {
        setTask(prevState => [...prevState, event])
    }

    function handleDelete(index) {
        const newArr = [...tasks];
        newArr.splice(index, 1);
        setTask(newArr);
    }

    return (
        <div className={`wrapper ${color ? 'dark' : 'white'}`}>
            <Settings toggleColor={handleChangeColor}/>
            <div className='card frame'>
                <Header
                    numTodos={tasks.length}
                />
                <TodoList
                    tasks={tasks}
                    onDelete={handleDelete}
                />
                <SubmitForm onFormSubmit={handleSubmit}/>
            </div>
        </div>
    );
}
export default App;

const Settings = ({toggleColor}) => {
    return <div className='settings-component'>
        <span>Settings:</span>
        <button onClick={toggleColor} className='button'>change background color</button>
    </div>;
};
