/*
const http = require('http');
const PORT = 2527;

const server = http.createServer((req, res) => {
    console.log("Inside server");

    if (req.url == '/' && req.method == 'GET') {
        res.setHeader('Content-Type', "text/html"); // to use the HTML tag
        console.log(req.url + " " + req.method);
        res.write("<h2 style='background:yellow'>Welcome to the Node Server</h2> ");
        res.end("<h2>server ended</h2>");
    }

    if (req.url == '/show' && req.method == 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            msg: "successfully hit the api"
        }));
    }
});

server.listen(PORT, () => {
    console.log("Server is running on the port " + PORT);
});
*/

const http = require("http");
const PORT = 2527;

const server = http.createServer((req, res) => {
	console.log("inside server body")
	if (req.url == '/' && req.method == 'GET') {
     
		res.setHeader('Content-Type', "text/html")
		console.log(req.url + " " + req.method);
   
		res.write("<div style='background:green'>")
		res.write("<h2 style='color:white'>Welcome to Node Server</h2>");
		res.write("</div>")
		res.end("<h2>Server has ended</h2>");
	}

	if (req.url == '/show' && req.method == 'GET') {
		res.setHeader('Content-Type','application/json')
		res.end(JSON.stringify({
			msg:"successfully hot the api"
		}))
	}

    if (req.url == '/show' && req.method == 'POST') {
		//res.setHeader('Content-Type','application/json')
		res.end(JSON.stringify({
			msg:"successfully hot the api"
		}))
	}
});

server.listen(PORT, () => {
    console.log("Server is running on the port " + PORT);
});
