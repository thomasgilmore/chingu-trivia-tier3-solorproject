const path = require('path');
const express = require('express');
const axios = require('axios');
const router = require('router');

const app = express()
const port = process.env.PORT || 3100

const publicDirectoryPath = path.join(__dirname, '../client/build')

app.use(express.static(publicDirectoryPath))

app.get('/api', (req, res) => {
    axios.get('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
    .then(response => {
        let data = response.data;
        res.send({ data })
    })
})

// axios.get('https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json')
//     .then(response => {
//         console.log(response.data)
//     })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})