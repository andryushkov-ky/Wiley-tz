import React, { Component } from 'react'

function crud(Component) {
    class Crud extends React.Component {
        state = {
            todos: []
        };

        render() {
            return <Component {...this.props} />
        }
    }

    Crud.displayName = `Crud(${Component.displayName || Component.name || 'Component'})`;

    return Crud;
}

export default crud;