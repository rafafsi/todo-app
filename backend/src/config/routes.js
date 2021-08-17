const express = require('express') //singleton -> retorna uma mesma instância

module.exports = function(server) {

    //API routes
    const router = express.Router()
    server.use('/api', router) 
    /* sempre q tiver server.use é um middleware.
    todo endereço q tiver /api vai ser interceptado por esse router*/

    //TODO routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') // o register (método do node-restful) vai usar todos os métodos definidos em todoService
}