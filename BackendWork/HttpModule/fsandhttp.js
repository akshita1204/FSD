const fs = require('fs').promises;
const http = require('http');
const PORT = 2527;

const server = http.createServer(async (req, res) => {
	// try {
	// 	res.setHeader('Content-Type', "text/html");
	// 	res.write("Welcome to HTTP and FS moduke");
	// 	const data = await fs.readFile('student.json', { encoding: 'utf-8' });
	// 	res.write(<h2 style="color:cyan">${data}</h2>)
	// 	res.end("------Response end-----");
	// }
	// catch (err) {
	// 	console.log(err)
	// }

	if (req.url == '/home' && req.method == "GET") {
		res.setHeader('Content-Type', "text/html");
		const htmlTemplate = await fs.readFile('home.html');
		res.end(htmlTemplate);
	}
    else if(req.url=='/textdata' && req.method=='GET')
    {
        res.setHeader('Content-Type', "text/html");
		const htmlTemplate = await fs.readFile('home.html');
		res.end(htmlTemplate);
    }
    else{
        res.end('error.html')
    }

	
})

server.listen(PORT, () => {
    console.log("Server is running on the port " + PORT);
});