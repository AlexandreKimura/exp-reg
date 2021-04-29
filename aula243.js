const { html } = require('./base');

//\
// $1 $2 $3 -> Retrovisores \1

//Match
console.log(html.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/gi))

//Replace
console.log(html.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi), '$1 HAHA $3 HAHA $4')


