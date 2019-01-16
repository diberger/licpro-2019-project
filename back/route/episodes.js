let express = require('express');
let bodyParser = require('body-parser');

let Stub = require('../fixtures/Stub');
let EpisodeWriter = require('../service/EpisodeWriter');
let Serie = require('../entity/Serie');

let router = express.Router();
let stub = new Stub();
let netflix = stub.loadNetflix();
let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({extended: false});
let episodeWriter = new EpisodeWriter();

router.post('/', urlencodedParser, function (req, res) {
    let serie = new Serie(req.body.name, req.body.code, req.body.mark);
    netflix.addSerie(serie);
    episodeWriter.write(serie);
    res.send(req.body.name);
});

router.put('/:id', urlencodedParser, function (req, res) {
    let serie = netflix.getSerie(req.params.id);
    netflix.updateSerie(req.params.id, req.body);
    episodeWriter.write(serie);
    res.send(req.body.name);
});

router.get('/:id', function (req, res) {

    res.send(netflix.getSerie(req.params.id));
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