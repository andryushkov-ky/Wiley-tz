import React, { Component, useState } from 'react';

import List from './components/List'
import Form from './components/Form'

const App = () => {
    const [todos, setTodos] = useState([
        {
            text: "task 1",
            isCompleted: false
        },
        {
            text: "task 2",
            isCompleted: false
        }
    ]);

    const addTodo = (val) => {
        const newTodos = [...todos, {
            text: val,
            isCompleted: false
        }];

        setTodos(newTodos);
    };

    const onToggle = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;

        setTodos(newTodos);
    }

    const onRemove = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);

        setTodos(newTodos);
    }

    const onUpdate = (index, text) => {
        const newTodos = [...todos];
        newTodos[index].text = text;

        setTodos(newTodos);
    }

    return (
        <div className="container">
            <Form addTodo={ addTodo }/>
            <List
                todos={ todos }
                onRemove={ onRemove }
                onUpdate={ onUpdate }
                onToggle={ onToggle }/>
        </div>
    );
}

export default App;
