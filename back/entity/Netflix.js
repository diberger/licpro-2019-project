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
        let episode = this.getSerie(id);
        episode.name = serie.name;
        episode.code = serie.code;
        episode.mark = serie.mark;
        return episode;
    }

}

module.exports = Netflix;