const { texto } = require('./base');

// * -> 0 ou n vezes
// + -> 1 ou n vezes
// ? -> 0 ou 1
// \ -> caracter de escape
// {n, m} - Mínimo e máximo

//const regExp1 = /Jo+ão|alexandre/gi
//console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi //-> Buscar jpg e jpeg
const regExp2 = /\.jpe{0,1}g/gi //-> Buscar jpg e jpeg

