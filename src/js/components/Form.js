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
        <form onSubmit={ handleSubmit }>
            <input
                onChange={ handleInput }
                type="text"
                value={ value }/>
            <button type="submit">Add</button>
        </form>
    );
}

export default Form;
