const { cpfs, ips } = require('./base');
//^ -> Alone means começã com
//CPFs
//\
//const cpfsLidos = cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g); 
//const cpfsLidos = cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g);
//console.log(cpfsLidos)

for(let i = 0; i < 300; i++) {
  const ip = `${i}.${i}.${i}.${i}`;
  console.log(ip)
}