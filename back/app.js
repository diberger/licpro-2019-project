let express = require('express');
let cors = require('cors');
let app = express();
let bodyParser = require('body-parser');
let episodes = require('./route/episodes');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/episodes', episodes);

app.listen(5000);