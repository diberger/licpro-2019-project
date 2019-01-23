let fs = require('file-system');

let deleteEpisode = function(fileName){
    fs.unlink(fileName , (err) => {
        if (err) throw err;
    });
};

module.exports = deleteEpisode;