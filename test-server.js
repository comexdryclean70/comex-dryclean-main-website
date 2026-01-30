const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('System Online');
});
server.listen(3050, () => console.log('Listening on 3050'));
