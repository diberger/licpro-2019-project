class Netflix {

    constructor() {
        this.series = [];
    }

    getSerie(id) {
        return this.series[id];
    }

    addSerie(serie) {
        this.series.push(serie);
        return this;
    }

    removeSerie(serie) {
        this.series.splice(serie, 1);
        return this;
    }

    updateSerie(id, serie) {
        this.getSerie(id).name = serie.name;
        this.getSerie(id).code = serie.code;
        this.getSerie(id).mark = serie.mark;
    }

}

module.exports = Netflix;