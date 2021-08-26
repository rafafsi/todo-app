//aqui vou mapear o obj para o documento do mongo
const restful = require('node-restful') //se to importando algo de alguma dependencia já baixada, uso só o nome no require
const mongoose = restful.mongoose //o node-restful criar uma "casca" em cima do mongoose, dando pra gente uma API praticamente pronta

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true }, //descrição do todo (da tarefa q foi incluída): vai ser obrigatoriamente uma string 
    done: { type: Boolean, required: true, default: false }, //o booleano q significa que a pessoa terminou ou não essa tarefa. se num informar nada, false
    createdAt: { type: Date, default: Date.now } //data de criação do registro no banco
})

module.exports = restful.model('Todo', todoSchema) //expondo um módulo para fora do arquivo