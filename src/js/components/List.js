import React, { Component } from 'react';

import Todo from './Todo';

const List = ({ todos }) => {
    return (
        <div className="todo-list">
            {todos.map((todo, index) =>
                <Todo
                    key = { index }
                    todo = { todo }
                    index = { index }/>
            )}
        </div>
    );
}

export default List;
