import React, { Component } from 'react'

function crud(Component) {
    class Crud extends React.Component {
        state = {
            todos: []
        };

        create = (val) => {
            const newTodos = [...this.state.todos, {
                text: val,
                isCompleted: false
            }];

            this.setState({
                todos: newTodos
            });
        };

        remove = (index) => {
            const newTodos = [...this.state.todos];
            newTodos.splice(index, 1);

            this.setState({
                todos: newTodos
            });
        }

        update = ({index, field, value}) => {
            const newTodos = [...this.state.todos];
            newTodos[index][field] = value;

            this.setState({
                todos: newTodos
            });
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