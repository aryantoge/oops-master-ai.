/**
 * OOP MASTER AI - Zero-Dependency Local Dev Server
 * Built with Node.js standard library (http, fs, path).
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8',
    '.zip': 'application/zip'
};

const server = http.createServer((req, res) => {
    // Enable CORS for local development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Parse URL safely
    let requestPath = decodeURI(req.url.split('?')[0]);
    if (requestPath === '/' || requestPath === '') {
        requestPath = '/index.html';
    }

    const safePath = path.normalize(requestPath).replace(/^(\.\.[\/\\])+/, '');
    let filePath = path.join(ROOT_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            // Check if adding index.html helps
            const potentialIndex = path.join(filePath, 'index.html');
            if (fs.existsSync(potentialIndex)) {
                filePath = potentialIndex;
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`<h1>404 - Not Found</h1><p>The file <code>${requestPath}</code> was not found on OOP Master AI server.</p>`);
                return;
            }
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (readErr, content) => {
            if (readErr) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end(`500 Internal Server Error: ${readErr.message}`);
                return;
            }

            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(content);
        });
    });
});

server.listen(PORT, '0.0.0.0', () => {
    const url = `http://localhost:${PORT}/`;
    console.log('\n==================================================');
    console.log('🚀 OOP MASTER AI - C++ Learning Platform Dev Server');
    console.log('==================================================');
    console.log(`\n  👉 Local:   ${url}`);
    console.log(`  👉 Network: http://127.0.0.1:${PORT}/`);
    console.log(`\n  Serving directory: ${ROOT_DIR}`);
    console.log('  Press Ctrl+C to stop.\n');

    // Auto-open browser on Windows if not in CI
    if (process.platform === 'win32' && !process.env.CI) {
        exec(`start "" "${url}"`, (error) => {
            if (error) {
                // Ignore silent browser launch issues
            }
        });
    }
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        const altPort = PORT + 1;
        console.log(`Port ${PORT} is in use, retrying on port ${altPort}...`);
        server.listen(altPort, '0.0.0.0');
    } else {
        console.error('Server error:', err);
    }
});
