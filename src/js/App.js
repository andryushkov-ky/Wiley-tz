import React, { Component, useState } from 'react';

import List from './components/List'
import Form from './components/Form'

import crud from './hoc/crud'

const App = ({ todos, create, update, remove }) => {
    return (
        <div className="app">
            <header className="header">
                TODOs
            </header>

            <div className="main">
                <Form addTodo={ create }/>
                <List
                    todos={ todos }
                    onRemove={ remove }
                    onUpdate={ update } />
            </div>
        </div>
    );
}

export default crud(App);
