// backend/server.js
const http = require('http');
const url = require('url');

let users = [
  { id: 1, name: "A", age: 25 },
  { id: 2, name: "B", age: 30 }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
  
  if (req.method === 'GET' && parsedUrl.pathname === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } else if (req.method === 'GET' && pathParts[0] === 'users' && pathParts[1]) {
    const user = users.find(u => u.id === parseInt(pathParts[1]));
    if (user) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('User not found');
    }
  } else if (req.method === 'POST' && parsedUrl.pathname === '/createuser') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const newUser = JSON.parse(body);
      newUser.id = users.length + 1;
      users.push(newUser);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    });
  } else if (req.method === 'PUT' && parsedUrl.pathname === '/edituser') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const updatedUser = JSON.parse(body);
      const index = users.findIndex(u => u.id === updatedUser.id);
      if (index !== -1) {
        users[index] = updatedUser;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedUser));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('User not found');
      }
    });
  } else if (req.method === 'DELETE' && parsedUrl.pathname === '/deleteuser') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const { id } = JSON.parse(body);
      users = users.filter(u => u.id !== id);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User deleted' }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});