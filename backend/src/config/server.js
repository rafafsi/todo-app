const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express() //criando uma instância do express e armazenando em "server"
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true })) //middleware que irá filtrar por todas as requisições q chegarem 
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server

/* const port = 3003

const bodyParser = require('body-parser') //faz o parse do corpo da request (form, json, etc.)
const express = require('express') //servidor web q roda em cima do node
const server = express() //startando o express dentro de server
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true})) //urlenconded é o padrão usado em submissão de formulário. 
server.use(bodyParser.json()) //esses dois middlewares são lidos por qualquer request
server.use(allowCors)

server.listen(port,function() {
    console.log(`BACKEND is running on port ${port}.`) //npm run dev
})

module.exports = server

    EXTENDED: true faz com que o bodyParser suporte mais tipos de dados do que o que vem por default
    o USE para todas as funções é só deixar só a função como parâmetro do server.use, desse modo qualquer url será interceptado por esse middleware
*/

