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

const btnPrideti=document.getElementById("prideti");
const btnIstrinti=document.getElementById("istrinti");
const inpVardas = <HTMLInputElement>document.getElementById("vardas");
const inpPavarde = <HTMLInputElement>document.getElementById("pavarde");
const inpAtlyginimas = <HTMLInputElement>document.getElementById("atlyginimas");
const output=document.getElementById("output");
const outMokesciai=document.getElementById("mokesciai");


let workers: Darbuotojas[] = [];
workers.push(new Darbuotojas("Zbitmen", "Miauuu", 2000))
workers.push(new Darbuotojas("Mauglis", "Mau", 1500))
workers.push(new Darbuotojas("Fre", "Maaau", 2500))

let workers2: Darbuotojas[] = [];

let workersString = localStorage.getItem("darbuotojai"); //paima ir grąžina duomenis iš local storage


// console.log(workers[0].vardas);
// console.log(workers[1].vardas);
// console.log(workers[2].vardas);
// console.log('DATA STRING', workersString);

// console.log(`${workers[0].vardas} pays ${workers[0].algaGPM()}`)


if(workersString != null){

let workersData = JSON.parse(workersString);

// console.log('DATA', workersData);

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

let outputWorkers = () => {

    if (output!=null){
        output.innerHTML="";

        let gpmSuma = 0;
        let psdSuma = 0;
        let vsdSuma = 0;
        
        workers2.forEach((darbuotojas, indeksas) => {

            gpmSuma += darbuotojas.algaGPM();
            psdSuma += darbuotojas.algaPSD();
            vsdSuma += darbuotojas.algaVSD();
     

            const li=document.createElement("li");
            li.className="list-group-item";
            li.textContent= `${darbuotojas.vardas} ${darbuotojas.pavarde} uždirba ${darbuotojas.atlyginimas} Eur.`, 
            output.appendChild(li);

            const btn = document.createElement("button");
            btn.textContent="Ištrinti";
            btn.className="btn btn-danger float-end";
            btn.onclick=()=>{
                deleteDarbuotojas(indeksas);
                console.log("Ištrynėme: "+preke.pavadinimas+" "+indeksas);
                
            };
            li.appendChild(btn);
        })

 outMokesciai.textContent=`${Math.floor(gpmSuma)} Eur GPM, ${Math.floor(psdSuma)} Eur PSD, ${Math.floor(vsdSuma)} Eur VSD.`
};
}

console.log(btnPrideti);


let deleteDarbuotojas = (indeksas:number) =>{
    workers2.splice(indeksas, 1);
    outputWorkers();
    localStorage.setItem("darbuotojai",JSON.stringify(workers2)); //atnaujina local storage
}


if (btnPrideti!=null){
    btnPrideti.onclick = () => {
        workers2.push(new Darbuotojas(inpVardas.value,inpPavarde.value,inpAtlyginimas.valueAsNumber));
        outputWorkers();
        localStorage.setItem("darbuotojai",JSON.stringify(workers2));
        console.log('pridejau');
    };
}

if (btnIstrinti != null){
    btnIstrinti.onclick = () =>{
        outputWorkers();
    }
}

outputWorkers();


// console.log(workers2);