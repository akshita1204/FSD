const http = require("http");
const PORT = 8080;
const server = http.createServer(async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/html");
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json()
    const htmlTemplate = `<html> <head> 
    <style> 
    .container{
      display:"flex"
      flex-direction:"row"
    }
    </style> </head> <body>
     <div class="container">
     ${
      response.map((item)=>{
        return(
          `
          <div >
          <div> <img src=" ${item.image}" height="200px" width="200px"/> </div>
          <div class="cat"> <br> ${item.id} ${item.category} </div>
          <div class="desc"> ${item.description} </div>
          <div class="price">  ${item.price}</div>

          </div>
          ` 
        )
      })
     } </div>
     </body> </html>
    `
    res.end(htmlTemplate);
  } catch (error) {
    console.log(error);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});