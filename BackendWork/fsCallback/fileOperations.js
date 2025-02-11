const fs=require('fs');
fs.writeFile('data.txt', "Welcome to FSD session", ()=>
{
    console.log("Data written Successfully");
})
fs.readFile('data.txt',(error,data)=>
{
 if(error)
 {
    console.log("Error while reading the data")
 }
 else
 {
    console.log(data.toString());
 }
} )