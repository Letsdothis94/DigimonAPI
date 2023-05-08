// server.js

const { createServer } = require('vite');
const express = require('express');

async function startServer() {
    const app = express();

    const vite = await createServer({
        server: {
            middlewareMode: true
        }
    });

    // Custom middleware to modify response headers
    app.use((req, res, next) => {
        res.removeHeader('Permissions-Policy');
        next();
    });

    app.use(vite.middlewares);

    const port = 3000;
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

startServer();
