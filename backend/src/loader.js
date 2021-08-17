const server = require('./config/server') //quando eu quero importar algo que está dentro da mnha aplicação eu uso o caminho relativo
require('./config/database') //o mongo tem que tar startado pra poder funcionar
require('./config/routes')(server) //essa linha vai chamar a função server q tá dentro de routes.js

/*vai fazer um require pro server que tá dentro de config. 
é o file que tem os principais arquivos de configuração*/
