import React, { Component, useState } from 'react';

const Todo = ({
        todo,
        index,
        onToggle,
        onRemove,
        onUpdate
    }) => {
    const [editingMode, setEditingMode] = useState(false);
    const [value, setValue] = useState(todo.text);

    const handleInput = ({ currentTarget }) => {
        setValue(currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim() && value !== todo.text) {
            onUpdate(index, value);
        }

        setEditingMode(!editingMode)
    }

    const renderTextItem = () => {
        return (
            <div className="todo__text-mode">
                <input
                    type="checkbox"
                    checked={ todo.isCompleted }
                    onChange={ () => onToggle(index) } />
                <div className="todo__text">
                    { todo.text }
                </div>
                <button
                    className="todo__btn todo__btn--del"
                    onClick={ () => setEditingMode(!editingMode) }>
                    Edit
                </button>
                <button
                    className="todo__btn todo__btn--del"
                    onClick={ () => onRemove(index) }>
                    Delete
                </button>
            </div>
        )
    }

    const renderEditItem = () => {
        return (
            <div className="todo__edit-mode">
                <form onSubmit={ handleSubmit }>
                    <input
                        className="task-input"
                        placeholder="Edit task"
                        value={ value }
                        onChange={ handleInput }/>
                    <button
                        className="task-btn"
                        type="submit">
                        Edit
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="todo">
            {
                !editingMode && renderTextItem()
            }
            {
                editingMode && renderEditItem()
            }
        </div>
    );
}

export default Todo;
