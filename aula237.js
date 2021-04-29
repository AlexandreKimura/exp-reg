const { texto } = require('./base');

const regExp1 = /João|alexandre/gi

console.log(texto.match(regExp1));
console.log(texto.replace(/João/gi, 'Alex'))

//Match encontra todas as ocorrências
//Replace troca a primeiro pela segunda
console.log(texto.replace(/(João|alexandre)/gi, function(input) {
  return input.toUpperCase();
}))

//()()() -> $1 $2 $3