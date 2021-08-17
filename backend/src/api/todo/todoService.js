const Todo = require('./todo') //importando o módulo que foi definido em todo.js

Todo.methods(['get','post','put','delete']) //nessa linha de código tá a criação de uma API rest padrão
Todo.updateOptions({new: true, runValidators: true}) 
/*quando houver alguma atualização no mongo, eu quero seja retornado o valor new(atualizado)
por padrão, o node-restful não valida as atualizações (só vê aquele todoSchema), então tem q botar runValidatores true*/

module.exports = Todo

// o node-restful tanto encapsula as chamadas pro express quanto pro mongo