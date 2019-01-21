import React, { Component, useState } from 'react';

const List = ({ todos }) => {
    return (
        <div className="todo-list">
            {todos.map((todo, index) =>
                <div className="todo" key={index}>
                    {todo.text}
                </div>
            )}
        </div>
    );
}

export default List;
