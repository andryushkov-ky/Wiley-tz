import React, { Component, useState } from 'react';

const Todo = ({
        todo,
        index,
        onToggle,
        onRemove,
        onUpdate
    }) => {

    return (
        <div className="todo">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(index)} />
            <div className="todo__text">
                { todo.text }
            </div>
            <button
                className="todo__btn todo__btn--del"
                onClick={() => onRemove(index)}>
                Удалить
            </button>
        </div>
    );
}

export default Todo;
