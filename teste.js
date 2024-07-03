const http = require('http'); //carrega um pacote (http) -> conjunto de funções

const hostname = '127.0.0.1'; //constante com o nome do host (numero local host)
const port = 3000; //porta definida (porta padrão 80)

const server = http.createServer((req, res) => { //metodo para criar um servidor e recebe como parâmetro uma função o que vai ser executado
  res.statusCode = 200; //vai retornar o status 200
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); //metodo para escutar o servidor e recebe como parâmetro a porta, o host e uma função que vai ser executada