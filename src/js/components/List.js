import React, { Component } from 'react';

import Item from './Item';

const List = (props) => {
    return (
        <div className = "list">
            {props.todos.map((todo, index) =>
                <Item
                    key = { index }
                    todo = { todo }
                    index = { index }
                    { ...props } />
            )}
        </div>
    );
}

export default List;
