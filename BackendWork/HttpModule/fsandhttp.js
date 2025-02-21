const fs = require("fs").promises;
const http = require("http");
const PORT = 2527;
const server = http.createServer(async (req, res) => {
  //   try {
  //     res.setHeader("Content-Type", "text/html");
  //     res.write("HTTP AND FS MODULE");
  //     const data = await fs.readFile("student.json", { encoding: "utf-8" });
  //     res.write(<h2 style='color:cyan'>${data}</h2>);

  //     // res.end();
  //   } catch (error) {
  //     console.log(error);
  //   }
  if (req.url == "/home" && req.method == "GET") {
    res.setHeader("Content-Type", "text/html");
    const htmlData = await fs.readFile("home.html");
    res.end(htmlData);

  }
  //for the textdata file
   else if (req.url == "/textdata" && req.method == "GET") {
    try {
        res.setHeader("Content-Type", "text/plain");
      const textData = await fs.readFile("textdata.txt", "utf-8");
      res.end(textData);
    } catch (error) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  } 
  //For the error page
  else {
    res.statusCode = 404;
    const errorPage = await fs.readFile("error.html", "utf-8");
    res.end(errorPage);
  }
});

server.listen(PORT, () => {
    console.log("Server is running on the port " + PORT);
});
