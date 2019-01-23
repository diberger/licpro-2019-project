let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});

//let Stub = require('../fixtures/Stub');
//let netflix = new Stub();

let Episode = require('../entity/Episode');
let NetFlix = require('../entity/Netflix');
let netflix = new NetFlix();

let writeEpisode = require('../service/EpisodeWriter');
let readAll = require('../service/NetflixReader');
let deleteEpisode = require('../service/EpisodeDeleter');

router.post('/', urlencodedParser, function (req, res) {
    let episode = new Episode(req.body.name, req.body.code, req.body.mark);
    console.log(req.body.name,req.body.code,episode);
    netflix.addSerie(episode);
    writeEpisode(episode);
    res.send(req.body.name);
});

router.put('/:id', urlencodedParser, function (req, res) {
    let episode = netflix.getSerie(req.params.id);
    netflix.updateSerie(req.params.id, req.body);
    writeEpisode(episode);
    res.send(req.body.name);
});

router.get('/:id', function (req, res) {
    readAll().then(function (netflix) {
        res.send(netflix.getSerie(req.params.id));
    }).catch(function (value) {
        console.log(value)
    });

});

router.get('/', function (req, res) {
    readAll().then(function (netflix) {
        res.send(JSON.stringify(netflix));
    }).catch(function (value) {
        console.log(value)
    });
});

router.delete('/delete/:id', function (req, res) {
    readAll().then(function (netflix) {
        let fileName = 'data/' + netflix.getSerie(req.params.id).id + '.json';
        deleteEpisode(fileName);
        res.send(fileName + ' was deleted');
    }).catch(function (value) {
        console.log(value)
    });
});

module.exports = router;