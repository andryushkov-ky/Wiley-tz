import React, { Component, useState } from 'react';

const Todo = ({ todo }) => {
    return (
        <div className="todo">
            { todo.text }
        </div>
    );
}

export default Todo;