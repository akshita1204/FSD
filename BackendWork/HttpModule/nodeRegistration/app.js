const http=require('http');
const fs=require('fs').promises;
const PORT=3001;


const server=http.createServer((req,res)=>
{

 if(req.url=='/register' && req.method=="POST")
 {
    let body='';
    let arr=[];
    req.on('data', chunk=>{
        body+=chunk;
    })
    res.end(JSON.stringify({"message":"/register api hit successfully"}));
 }
 res.end("Welcome to the Server");
});
server.listen(PORT,()=>
{
    console.log(`Server is running on the ${PORT}`);
})
