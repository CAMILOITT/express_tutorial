const { request, response } = require('express');
const express = require('express');
const App = express();

App.use(express.json());

App.get('/', (request, response) => {
  response.send({ message: 'hello world' });
});

App.post('/sum', (request, response) => {
  const { num1, num2 } = request.body;
  let result = num1 + num2;
  response.send({ resultado: result });
});
App.post('/rest', (request, response) => {
  const { num1, num2 } = request.body;
  let result = num1 - num2;
  response.send({ resultado: result });
});
App.post('/multiply', (request, response) => {
  const { num1, num2 } = request.body;
  let result = num1 * num2;
  response.send({ resultado: result });
});
App.post('/divisor', (request, response) => {
  const { num1, num2 } = request.body;
  let result = num1 / num2;
  response.send({ resultado: result });
});

App.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
