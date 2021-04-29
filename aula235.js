//g - global (Encontra todas as ocorrências)
//i - insensitive a = A
// () - > grupos
// | -> Ou

const { texto } = require('./base');

const regExp1 = /João/gi

const regExp2 = /(maria|teste|alexandre)(dev)/
const found = regExp2.exec(texto)

//Existe o texto de regExp1 em texto
//console.log(regExp1.test(texto));