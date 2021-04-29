const { texto, html } = require('./base');

const encontra = html.match(/<.+>.+<\/.+>/g); //Pega tudo numa vez só - greedy

//console.log(encontra)

const encontraCerto = html.match(/<.+?>.+?<\/.+?>/g); //non greedy

console.log(encontraCerto)

