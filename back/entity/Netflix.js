class Netflix {

    constructor() {
        this.series = [];
    }

    getSerie(id) {
        let episode;
        this.series.forEach(e => {
           if(e.id === id) {
               episode = e;
               return;
           }
        });
        return episode;
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