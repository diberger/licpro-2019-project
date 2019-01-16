let fs = require('file-system');

class EpisodeWriter {

    constructor() {
    }

    write(serie) {

        let serieJSON = JSON.stringify(serie);
        fs.writeFile('data/' + serie.id + '.json', serieJSON);
    }

}


module.exports = EpisodeWriter;