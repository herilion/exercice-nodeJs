const http = require('http');
const fs = require('fs')
const server = http.createServer();
server.on('request', (req, res) => {
    let datahtml = ''
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
            'content-Type': 'text/html;charset=utf - 8',
        });
        res.write(data);
        return res.end();
    })
})
server.listen(9000); //on utilisera le port 9000 de notre server