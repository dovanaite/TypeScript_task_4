class Darbuotojas{
    constructor (
        private _vardas:string,
        private _pavarde:string,
        private _atlyginimas:number
    ){

    }
    get vardas(){
        return this._vardas;
    }

    get pavarde(){
        return this._pavarde;
    }
    get atlyginimas(){
        return this._atlyginimas;
    }

    public algaGPM(){
        return this.atlyginimas*0.20;
    }
    public algaPSD(){
        return this.atlyginimas*0.0698;
    }
    public algaVSD(){
        return this.atlyginimas*0.1252;
    }

}

let workers: Darbuotojas[] = [];
workers.push(new Darbuotojas("Zbitmen", "Miauuu", 2000))
workers.push(new Darbuotojas("Mauglis", "Mau", 1500))
workers.push(new Darbuotojas("Fre", "Maaau", 2500))

let workers2: Darbuotojas[] = [];

let workersString = JSON.stringify(workers);

console.log(workers[0].vardas);
console.log(workers[1].vardas);
console.log(workers[2].vardas);
console.log('DATA STRING', workersString);

console.log(`${workers[0].vardas} pays ${workers[0].algaGPM()}`)

let workersData = JSON.parse(workersString);
if(workersString != null){


console.log('DATA', workersData);

interface dataDarbuotojas{
    _vardas:string,
    _pavarde:string,
    _atlyginimas:number
}

workersData.forEach((emp:dataDarbuotojas) => {
    let newDarbuotojas = new Darbuotojas(emp._vardas, emp._pavarde, emp._atlyginimas);
    workers2.push(newDarbuotojas);
})

}

console.log(workers2);