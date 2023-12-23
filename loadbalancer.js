const express = require('express');
const axios = require('axios');
const app = express();

let servers = ['http://localhost:3001', 'http://localhost:3002'];
let current = 0;

app.use(express.json());

app.use(async (req, res) => {
    const server = servers[current];
    current = (current + 1) % servers.length;

    try {
        const response = await axios({
            url: `${server}${req.url}`,
            method: req.method,
            headers: req.headers,
            data: req.body
        });
        res.send(response.data);
        console.log(response.data);
    } catch (err) {
        res.status(500).send("Server error!");
        console.error(err);
    }
});

app.listen(8080, err => {
    if (err) {
        console.log("Failed to listen on PORT 8080");
    } else {
        console.log("Load Balancer Server listening on PORT 8080");
    }
});
