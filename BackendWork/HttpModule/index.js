const http=require('http');
const PORT=2527;
const server=http.createServer((req,res)=>{

    console.log("Inside server");
  res.write("Welcome to the Node Server");
  res.end("server ended")
})
server.listen(PORT,()=>
{
    console.log("Server is running on the " +PORT)
})
//reserved port numbers are => upto 1024