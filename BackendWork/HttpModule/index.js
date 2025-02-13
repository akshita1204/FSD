const http=require('http');
const PORT=2527;
const server=http.createServer((req,res)=>{

    console.log("Inside server");
    res.setHeader('Content-type',"text/html"); //to use the html tag i
    res.write("<h2 style='background:yellow'>Welcome to the Node Server</h2> ");
    res.end("<h2>server ended</h2>")
})
server.listen(PORT,()=>
{
    console.log("Server is running on the " +PORT)
})
//reserved port numbers are => upto 1024