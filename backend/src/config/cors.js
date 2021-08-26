//CRIANDO UM MIDDLEWARE
module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}

/*
module.exports = function(res,req,next) { //search for HEADERS do cors
    res.header('Access-Control-Allow-Origin', '*') //permito acesso vindo o request de várias origens (front e back estarão rodando em diferents portas)
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') //dando acesso aos métodos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') 
    next() //o next é importante para que a aplicação não pare
    
    //esse mid não dá um response direto ao user, apenas cumpre parte do processo e dá sequência com o next
}
*/