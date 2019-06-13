"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var nombre = 'Maycon';
var number = 12343;
var bolean = true;
var data = new Date();
var cualquiera = 'sdfsdfsdf';
var spider = {
    nombre: 'Araña',
    edad: 17
};
//-----------------------------------------
var texto = "Hola, " + nombre;
// ---------------------------------------------
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = 'batiseñal'; }
    console.log(quien + " activo algo");
}
activar('Maycon');
// -----------------------------------------------
// let promesa1 = new Promise(function (resolve, reject){
//   if (true) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// ------------------------------------------------------
function sendMission(xmen) {
    console.log(xmen.nombre + " ha carreado");
}
var wolverine = {
    nombre: 'Wolve',
    poder: 'regeneracion'
};
// --------------------------------------------------------
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger('Antman', 'cap', 'Scot');
console.log(antman);
// ----------------------------------------------------------------
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
