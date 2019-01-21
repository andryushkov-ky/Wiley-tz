import React, { Component } from 'react'

function crud(Component) {
    class Crud extends React.Component {
        state = {
            todos: []
        };

        componentDidMount() {
            this.get();
        }

        get = () => {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];

            this.setState({
                todos: todos
            })
        }

        save = (todos) => {
            this.setState({
                todos
            }, localStorage.setItem('todos', JSON.stringify(todos)));
        }

        create = (val) => {
            const newTodos = [...this.state.todos, {
                text: val,
                isCompleted: false
            }];

            this.save(newTodos);
        }

        remove = (index) => {
            const newTodos = [...this.state.todos];
            newTodos.splice(index, 1);

            this.save(newTodos);
        }

        update = ({index, field, value}) => {
            const newTodos = [...this.state.todos];
            newTodos[index][field] = value;

            this.save(newTodos);
        }

        render() {
            return <Component
                todos = { this.state.todos }
                create = { this.create }
                update = { this.update }
                remove = { this.remove }
                { ...this.props } />
        }
    }

    Crud.displayName = `Crud(${Component.displayName || Component.name || 'Component'})`;

    return Crud;
}

export default crud;