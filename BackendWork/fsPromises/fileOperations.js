const promise=require('fs').promises;
const fsp=promise.writeFile('data.txt',"Hello using fs promises to write the data");
console.log(fsp)
