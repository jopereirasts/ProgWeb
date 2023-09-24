const http = require('http');
const fs = require('fs');
const path = require('path');

function readDirectory(directoryPath, callback) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return callback(err, null);
        }

        const items = [];

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            const stats = fs.statSync(filePath);
            const isDirectory = stats.isDirectory();
            items.push({ name: file, isDirectory });
        });

        callback(null, items);
    });
}


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {

        const directoryPath = process.argv[2] || './'; 

        readDirectory(directoryPath, (err, items) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro interno do servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<html><body><ul>');

                items.forEach(item => {
                    res.write(`<li>${item.isDirectory ? '[DIR] ' : ''}${item.name}</li>`);
                });

                res.end('</ul></body></html>');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});