const { lookahed } = require('./base');

//\

//console.log(lookahed)

//Positive lookahed -> frases que tem active
//console.log(lookahed.match(/.+(?=[^in]active)/gim))

//Positive lookahed -> frases que tem inactive
//console.log(lookahed.match(/.+(?=\s+inactive)/gim))

//Negativa lookahed -> Frases que não tem active
//console.log(lookahed.match(/^(?!.+[^in]active).+$/gim))


//Positive loobehind -> Frases que começam com ONLINE
//console.log(lookahed.match(/(?<=ONLINE\s+)\S+.*/gim))

//Positive loobehind -> Frases que NÃO começam com ONLINE
//console.log(lookahed.match(/^.+(?<!ONLINE.+)$/gim))

