import React, { Component, useState } from 'react';

import List from './components/List'
import Form from './components/Form'

const App = () => {
    const [todos, setTodos] = useState([
        {
            text: "task 1",
            completed: false
        },
        {
            text: "task 2",
            completed: false
        }
    ]);

    const addTodo = (todo) => {
        console.log(todo);
    };

    return (
        <div className="container">
            <Form addTodo={addTodo}/>
            <List todos={todos}/>
        </div>
    );
}

export default App;
