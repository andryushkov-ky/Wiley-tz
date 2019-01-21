import React, { Component, useState } from 'react';

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleInput = ({ currentTarget }) => {
        setValue(currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim()) {
            addTodo(value);
            setValue("");
        }
    }

    return (
        <div className="addform">
            <form onSubmit={ handleSubmit }>
                <input
                    className="main-input"
                    placeholder="Task"
                    type="text"
                    onChange={ handleInput }
                    value={ value } />
                <button
                    className="main-btn"
                    type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}

export default Form;
