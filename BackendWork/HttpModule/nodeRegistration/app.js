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
    req.on('end',async ()=>
    {
       const {name,email,password} = JSON.parse(body);
       console.log(name)
       const fdata=await fs.readFile('studentss.json',{encoding:'utf-8'});
       arr=JSON.parse(fdata);
       //to check the duplicacy of data
       const result=arr.find(ele=>ele.email==email);
       if(result)  //email already exists
       {
          res.setHeader('Content-Type','application/json');
          return res.end(JSON.stringify({"message":"Email Exists!"}))
       }
       else
       {
        arr.push({name,email,password});
        await fs.writeFile('studentss.json',JSON.stringify(arr,null,2));
        res.end(JSON.stringify({"message":"Registration successfully"}));
       }

    })
 }

 //For the login
 if(req.url=='/login' && req.method=='POST')
 {
    let body='';
    let arr=[];
    req.on('data', chunk=>{
        body+=chunk;
    })
    req.on('end',async()=>
    {
        const {email,password} = JSON.parse(body);
        const fdata=await fs.readFile('studentss.json',{encoding:'utf-8'});
        arr=JSON.parse(fdata);
        const result=arr.find(ele=>ele.email==email && password==ele.password);
        if(result)
        {
          res.setHeader('Content-Type','application/json');
          res.end(JSON.stringify({"message":"Login successfully"}));
        }
        else
        {
            await fs.writeFile('studentss.json',JSON.stringify(arr,null,2));
            res.end(JSON.stringify({"message":"Login Failed"}));
        }
    })
 }

 //res.end("Welcome to the Server");
});
server.listen(PORT,()=>
{
    console.log(`Server is running on the ${PORT}`);
})
