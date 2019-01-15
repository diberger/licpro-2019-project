let express = require('express');
let router = express.Router();
let Stub = require('../data/Stub');
let stub = new Stub();
let netflix = stub.loadNetflix();


let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, function (req, res) {
    res.send(req.body.name);
});

router.put('/:id', urlencodedParser, function (req, res) {
    res.send(req.body.name);
});

router.get('/:id', function (req, res) {
    res.send(netflix.getSerie(req.params.id))
});

router.get('/', function (req, res) {
    let names = "";

    netflix.series.forEach(function (value) {
        names += value.name;
    });

    res.send(names)
});

router.delete('/delete/:id', function (req, res) {
    netflix.removeSerie(req.params.id);
    res.send('yo')
});

module.exports = router;