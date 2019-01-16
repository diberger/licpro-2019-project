var aguid = require('aguid');

class Serie {

    constructor(name, code, mark) {
        this.id = aguid();
        this.name = name;
        this.code = code;
        this.mark = mark;
    }

}

module.exports = Serie;