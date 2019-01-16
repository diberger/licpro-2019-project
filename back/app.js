let express = require('express');
let app = express();

let episodes = require('./route/episodes');

app.use('/episodes', episodes);

app.listen(3000);