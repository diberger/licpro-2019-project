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

}

module.exports = Netflix;