const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../build');
const axios = require('axios');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath));
});

app.get('/api', (req, res) => {
    axios.get('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
    .then(response => {
        let data = response.data;
        res.send({ data });
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});