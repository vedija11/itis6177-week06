const express = require('express')
const axios = require('axios');
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.get('/', function(req, res) {
    const info = axios.get('https://r3n249devl.execute-api.us-east-2.amazonaws.com/prod')
    .then((response) => {
        res.send(response.data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))