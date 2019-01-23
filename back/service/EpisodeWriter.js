let fs = require('file-system');

let writeEpisode = function (episode) {
    let episodeJSON = JSON.stringify(episode);
    fs.writeFile('data/' + episode.id + '.json', episodeJSON);
};

module.exports = writeEpisode;