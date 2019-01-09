class Stub{


    constructor(){
        this.test = "";
    };

    loadNetflix(){

        let netflix = new Netflix();

        netflix.addSerie(new Serie('GOT','S01E01',8));
        netflix.addSerie(new Serie('Les experts','S78E47',1));
        netflix.addSerie(new Serie('Kaamelott','S01E01',10));

        return netflix;
    }

}

exports.modules = Stub;