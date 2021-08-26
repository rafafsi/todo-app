  
import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)







/*import React, { Component } from 'react' 
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

 é o componente mais complicado da aplicação pq ele vai centralizar boa parte da regra de cadastro 

const URL = 'https://localhost:3003:api:todos'

export default class Todo extends Component {
    constructor (props) {
        super(props) //props é read-only. pra acessar esse valor, é preciso trvbalhar em cima do estado dele
        this.state = {description: '', list: []} //o state é um objeto com dois elementos q representam o estado inicial do campo

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    } //em praticamente todos os métodos vai ser preciso fazer o bind pra amarrar à função atual que está dentro do componente
    
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => console.log('funcionou!'))

    }

    
    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Register'></PageHeader>
                <TodoForm 
                       handleAdd={this.handleAdd} 
                        description={this.state.description}
                        handleChange={this.handleChange}/>
                <TodoList />
            </div>
        )
    }
}

*/