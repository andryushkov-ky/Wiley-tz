import React, { Component, useState } from 'react';

const Item = ({
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
            onUpdate({ index, value, field: 'text' });
        }

        setEditingMode(!editingMode)
    }

    const renderTextItem = () => {
        return (
            <div className="show-mode">
                <div className="wrap-text">
                    <div
                        className={`check toggle-${ todo.isCompleted }`}
                        onClick={ () => onUpdate({ index, field: "isCompleted", value: !todo.isCompleted }) } >
                    </div>
                    <span className="text">{ todo.text }</span>
                </div>

                <div className="sub-panel">
                    <span
                        className="edit"
                        onClick={ () => setEditingMode(!editingMode) }>
                    </span>
                    <span
                        className="delete"
                        onClick={ () => onRemove(index) }>
                    </span>
                </div>
            </div>
        )
    }

    const renderEditItem = () => {
        return (
            <div className="edit-mode">
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
        <div className="item">
            {
                !editingMode && renderTextItem()
            }
            {
                editingMode && renderEditItem()
            }
        </div>
    );
}

export default Item;
