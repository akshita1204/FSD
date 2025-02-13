const promise=require('fs').promises;
const fsp=promise.writeFile('data.txt',"Hello using fs promises to write the data");
fsp.then(()=>
{
    console.log("data written successfully");
}).catch((err)=>
{
    console.log("Error while writing the data");
}).finally(()=>
{
    console.log("Finally closes all the resousurces successfully");
})


//second methood using async await 
async function readFileAsync()
{
    const data=await promise.readFile('data.txt',{encoding:'utf-8'});
    console.log(data);
}

readFileAsync();