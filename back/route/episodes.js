let express = require('express');
let router = express.Router();


//let Stub = require('../fixtures/Stub');
//let netflix = new Stub();


let Episode = require('../entity/Episode');
let NetFlix = require('../entity/Netflix');
let netflix = new NetFlix();

let writeEpisode = require('../service/EpisodeWriter');
let readAll = require('../service/NetflixReader');
let deleteEpisode = require('../service/EpisodeDeleter');

router.post('/', function (req, res) {
    let episode = new Episode(req.body.name, req.body.code, req.body.mark);
    console.log(req.body.name,req.body.code,episode);
    netflix.addSerie(episode);
    writeEpisode(episode);
    res.send(JSON.stringify(episode));
});

router.put('/:id', function (req, res) {
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
        res.send(JSON.stringify(netflix.series));
    }).catch(function (value) {
        console.log(value)
    });
});

router.delete('/delete/:id', function (req, res) {
    readAll().then(function (netflix) {
        let episode = netflix.getSerie(req.params.id);
        console.log(episode);
        if(episode !== null && episode !== undefined) {
            let fileName = 'data/' + episode.id + '.json';
            deleteEpisode(fileName);
            res.send(fileName + ' was deleted');
        } else {
            res.send("Echec de suppresion");
        }
    }).catch(function (value) {
        console.log(value)
    });
});

module.exports = router;