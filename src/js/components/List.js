import React, { Component } from 'react';

import Todo from './Todo';

const List = (props) => {
    return (
        <div className = "todo-list">
            {props.todos.map((todo, index) =>
                <Todo
                    key = { index }
                    todo = { todo }
                    index = { index }
                    { ...props } />
            )}
        </div>
    );
}

export default List;
