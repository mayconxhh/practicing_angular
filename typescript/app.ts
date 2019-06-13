let nombre:string = 'Maycon';
let number:number = 12343;
let bolean: boolean = true;

let data:Date = new Date();

let cualquiera:any = 'sdfsdfsdf';

let spider = {
  nombre: 'Araña',
  edad: 17
}


//-----------------------------------------
let texto = `Hola, ${nombre}`

// ---------------------------------------------
function activar( quien:string, objeto:string = 'batiseñal', momento?:string ) {
  console.log(`${quien} activo algo`);
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
function sendMission (xmen: {nombre:string}) {
  console.log(`${xmen.nombre} ha carreado`)
}

let wolverine = {
  nombre: 'Wolve',
  poder: 'regeneracion'
};

// --------------------------------------------------------

class Avenger {
  nombre:string;
  equipo:string;
  nombreReal:string;
  puedePelear:boolean = false;
  peleasGanadas:number = 0;

  constructor (nombre:string, equipo:string, nombreReal:string){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
}

let antman:Avenger = new Avenger('Antman', 'cap', 'Scot');

console.log(antman);
// ----------------------------------------------------------------


function consola(constructor:Function){
  console.log(constructor)
}


@consola
class Villano {
  constructor (public nombre:string){

  }
}