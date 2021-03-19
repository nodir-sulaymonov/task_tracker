import React, {useEffect, useState} from "react";
import Header from "./Headerjs";
import TodoList from "./TodoList";
import SubmitForm from "./SubmitForm";
import './App.css';
import 'bulma/css/bulma.css';
import Context from "./context";

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

    function handleSubmit (title) {
        setTask(
            tasks.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false
                }
            ])
        )
    }

    function handleDelete(id) {
        console.log(id)
        setTask(tasks.filter(todo => todo.id !== id))
    }

    return (
        <Context.Provider value={{handleDelete}}>
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
        </Context.Provider>
    );
}
export default App;

const Settings = ({toggleColor}) => {
    return <div className='settings-component'>
        <strong>Settings:</strong>
        <button onClick={toggleColor} className='change_button'>change background color</button>
    </div>;
};
