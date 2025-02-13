const { readFileSync } = require('fs');

const promise=require('fs').promises
async function takedata()
{
    //take the data
    const data=await promise.readFile('studentdata.json',{encoding:'utf-8'});
    console.log(data);

     //write the data 
    const newdata=await promise.writeFile('newstudent.json',data);

    //read the data 
    const data1=await promise.readFile('newstudent.json',{encoding:'utf-8'});
    console.log(data1);
}

const obj=
{
    takedata,
    readFileSync
}
module.exports=obj;
