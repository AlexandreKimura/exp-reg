const { alfabeto } = require('./base');

//range - menor para o maior
//^ -> Negação

const range = alfabeto.match(/[a-zA-Z0-9]+/g); 

//console.log(range);
console.log(alfabeto.match(/\d+/g)); //números
console.log(alfabeto.match(/\D+/g)); //negação números

