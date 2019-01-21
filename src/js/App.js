import React, { Component, useState } from 'react';

import List from './components/List'
import Form from './components/Form'

import crud from './hoc/crud'

const App = ({ todos, create, update, remove }) => {
    return (
        <div className="container">
            <Form addTodo={ create }/>
            <List
                todos={ todos }
                onRemove={ remove }
                onUpdate={ update } />
        </div>
    );
}

export default crud(App);
