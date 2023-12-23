const express = require('express');
const app = express();
const dotenv = require('dotenv');

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send(`Hello World! from ${PORT}`);
    console.log(`Hello World! from ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
