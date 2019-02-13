let fs = require('file-system');
let NetFlix = require('../entity/Netflix');

function readOne(fileName) {
    return new Promise((resolve, reject) => {
        if (fileName.split('.').pop() === "json") {
            fs.readFile('data/' + fileName, 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data));
            });
        } else {
            resolve(undefined);
        }
    });
}

function readAll() {
    let netflix = new NetFlix();
    return new Promise((resolve, reject) => {
        fs.readdir('data/', function (err, files) {
            if (err) {
                reject(err);
                return;
            }
            const promisesRead = files.map((fileName) => {
                return readOne(fileName);
            });
            Promise.all(promisesRead).then((episodes) => {
                episodes.forEach(e => {
                    console.log(e);
                    if (e !== undefined) {
                        netflix.addSerie(e)
                    }
                });
                resolve(netflix);
            }).catch((err) => reject(err));
        });
    });
}

module.exports = readAll;