const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('c:\\Users\\jcoso\\Desktop\\CarolinaMoralesWeb\\public\\files\\DOC-20260223-WA0109..pdf');
pdf(dataBuffer).then(function (data) {
    console.log("TEXT START");
    console.log(data.text.substring(0, 1000));
    console.log("TEXT END");
}).catch(e => console.error(e));
