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
var workers = [];
workers.push(new Darbuotojas("Zbitmen", "Miauuu", 2000));
workers.push(new Darbuotojas("Mauglis", "Mau", 1500));
workers.push(new Darbuotojas("Fre", "Maaau", 2500));
var workers2 = [];
var workersString = JSON.stringify(workers);
console.log(workers[0].vardas);
console.log(workers[1].vardas);
console.log(workers[2].vardas);
console.log('DATA STRING', workersString);
console.log("".concat(workers[0].vardas, " pays ").concat(workers[0].algaGPM()));
var workersData = JSON.parse(workersString);
if (workersString != null) {
    console.log('DATA', workersData);
    workersData.forEach(function (emp) {
        var newDarbuotojas = new Darbuotojas(emp._vardas, emp._pavarde, emp._atlyginimas);
        workers2.push(newDarbuotojas);
    });
}
console.log(workersData[0]._vardas);
