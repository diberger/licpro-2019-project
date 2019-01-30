let express = require('express');
let cors = require('cors');
let app = express();

let episodes = require('./route/episodes');

app.use(cors());
app.use('/episodes', episodes);

app.listen(5000);