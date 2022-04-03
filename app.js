var Darbuotojas = /** @class */ (function () {
    function Darbuotojas(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    Object.defineProperty(Darbuotojas.prototype, "vardas", {
        get: function () {
            return this._vardas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Darbuotojas.prototype, "pavarde", {
        get: function () {
            return this._pavarde;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Darbuotojas.prototype, "atlyginimas", {
        get: function () {
            return this._atlyginimas;
        },
        enumerable: false,
        configurable: true
    });
    Darbuotojas.prototype.algaGPM = function () {
        return this.atlyginimas * 0.20;
    };
    Darbuotojas.prototype.algaPSD = function () {
        return this.atlyginimas * 0.0698;
    };
    Darbuotojas.prototype.algaVSD = function () {
        return this.atlyginimas * 0.1252;
    };
    return Darbuotojas;
}());
var btnPrideti = document.getElementById("prideti");
var btnIstrinti = document.getElementById("istrinti");
var inpVardas = document.getElementById("vardas");
var inpPavarde = document.getElementById("pavarde");
var inpAtlyginimas = document.getElementById("atlyginimas");
var output = document.getElementById("output");
var outMokesciai = document.getElementById("mokesciai");
var workers = [];
workers.push(new Darbuotojas("Zbitmen", "Miauuu", 2000));
workers.push(new Darbuotojas("Mauglis", "Mau", 1500));
workers.push(new Darbuotojas("Fre", "Maaau", 2500));
var workers2 = [];
var workersString = localStorage.getItem("darbuotojai"); //paima ir grąžina duomenis iš local storage
// console.log(workers[0].vardas);
// console.log(workers[1].vardas);
// console.log(workers[2].vardas);
// console.log('DATA STRING', workersString);
// console.log(`${workers[0].vardas} pays ${workers[0].algaGPM()}`)
if (workersString != null) {
    var workersData = JSON.parse(workersString);
    workersData.forEach(function (emp) {
        var newDarbuotojas = new Darbuotojas(emp._vardas, emp._pavarde, emp._atlyginimas);
        workers2.push(newDarbuotojas);
    });
}
var outputWorkers = function () {
    if (output != null) {
        output.innerHTML = "";
        var gpmSuma_1 = 0;
        var psdSuma_1 = 0;
        var vsdSuma_1 = 0;
        workers2.forEach(function (darbuotojas, indeksas) {
            gpmSuma_1 += darbuotojas.algaGPM();
            psdSuma_1 += darbuotojas.algaPSD();
            vsdSuma_1 += darbuotojas.algaVSD();
            var li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = "".concat(darbuotojas.vardas, " ").concat(darbuotojas.pavarde, " u\u017Edirba ").concat(darbuotojas.atlyginimas, " Eur."),
                output.appendChild(li);
            var btn = document.createElement("button");
            btn.textContent = "Ištrinti";
            btn.className = "btn btn-danger float-end";
            btn.onclick = function () {
                deleteDarbuotojas(indeksas);
                console.log("Ištrynėme: " + preke.pavadinimas + " " + indeksas);
            };
            li.appendChild(btn);
        });
        outMokesciai.textContent = "".concat(Math.floor(gpmSuma_1), " Eur GPM, ").concat(Math.floor(psdSuma_1), " Eur PSD, ").concat(Math.floor(vsdSuma_1), " Eur VSD.");
    }
    ;
};
console.log(btnPrideti);
var deleteDarbuotojas = function (indeksas) {
    workers2.splice(indeksas, 1);
    outputWorkers();
    localStorage.setItem("darbuotojai", JSON.stringify(workers2)); //atnaujina local storage
};
if (btnPrideti != null) {
    btnPrideti.onclick = function () {
        workers2.push(new Darbuotojas(inpVardas.value, inpPavarde.value, inpAtlyginimas.valueAsNumber));
        outputWorkers();
        localStorage.setItem("darbuotojai", JSON.stringify(workers2));
        console.log('pridejau');
    };
}
if (btnIstrinti != null) {
    btnIstrinti.onclick = function () {
        outputWorkers();
    };
}
outputWorkers();
// console.log(workers2);
