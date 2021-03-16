import React, {useState} from "react";

function SubmitForm ({onFormSubmit}) {
    const [task, setTask] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        if (task === '') return;
        onFormSubmit(task);
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                placeholder='Enter Item'
                value={task}
                onChange={e => setTask(e.target.value) }
            />
            <button className='button'>Submit</button>
        </form>
    );
}
export default SubmitForm;
