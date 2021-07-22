//inclui a biblioteca http
const http = require('http');
const url = require('url');
const queryString = require('query-string')

//declara as variaveis ip e porta onde codigo vai rodar
//definicao endereco e url
const hostname = '127.0.0.1';
const port = 3000;

//implementacao da regra de negocio
const server = http.createServer((req, res) => {
  //pegar a pergunta na url
    const params = queryString.parse(url.parse(req.url,true).search);
 
  //verificar perguntar e escolher resposta
    let resposta;

    if (params.pergunta=='melhor-filme'){
        resposta='Star Wars';
    }
    else if (params.pergunta=='melhor-tecnologia-backend'){
        resposta='nodeJs';
    }
    else{
        resposta='nao sei, desculpe :(';
    };
    

  //retornar a resposta escolhida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

//execucao
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});