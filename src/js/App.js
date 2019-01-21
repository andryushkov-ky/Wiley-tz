import React, { Component, useState } from 'react';

import List from './components/List'

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

    return (
        <div className="container">
            <List todos={todos}/>
        </div>
    );
}

export default App;
