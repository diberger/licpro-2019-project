class Netflix {

    constructor() {
        this.series = [];
    }

    getSerie(id) {
        return this.series.get(id);
    }

    addSerie(serie) {
        this.series.push(serie);
        return this;
    }

    removeSerie(serie) {
        this.series.delete(serie);
        return this;
    }

}