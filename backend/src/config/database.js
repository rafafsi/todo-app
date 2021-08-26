const mongoose = require('mongoose')
mongoose.Promise = global.Promise //só pra tirar msg de erro de que o mongoose is depreciated
module.exports = mongoose.connect('mongodb://localhost/todo', { useMongoClient: true })


/*, {     
    useMongoClient: true,     
    useNewUrlParser: true,     
    useUnifiedTopology: true, }); //essas config adicionais farão sumir os warnings no teminal


 vai mapear os obj JS pra os documentos q vão pro mongo e tbm vai abrir uma conexão com o db */