import React, { Component } from 'react' 
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

/* é o componente mais complicado da aplicação pq ele vai centralizar boa parte da regra de cadastro */


export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Register'></PageHeader>
                <TodoForm />
                
                <TodoList />
            </div>
        )
    }
}

