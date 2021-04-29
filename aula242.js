const { cpfs} = require('./base');

//\

// ^ -> Começa com
// [^] -> Negação
// $ Termina com

const cpfBase = '123.123.123-12'
const cpfsLidos = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g;
//console.log(cpfsLidos)
console.log(cpfBase.match(cpfsLidos))
