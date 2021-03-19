import React, {useState} from "react";
import './App.css';
function SubmitForm ({onFormSubmit}) {
    const [value, setValue] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        if (value === '') return;
        onFormSubmit(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                placeholder='Enter Item'
                value={value}
                onChange={e => setValue(e.target.value) }
            />
            <button type='submit' className='submit_button'>Submit</button>
        </form>
    );
}
export default SubmitForm;
