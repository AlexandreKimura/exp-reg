const { lookahed } = require('./base');

//\
//Encontra todas as palavras

const palavrasRegExp = /[\wÁ-ú]/g

//Não números
const naoNumero = /\D/g

//Valida ip
const validaIp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

//valida cpf
const cpf = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

//validar número
const phone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g;

//validar senhas fortes
const senhas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8.}$/g;

//Valida e-mail
//const emails = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/g;
//Ou pesquisar na net -> Muito melhor
