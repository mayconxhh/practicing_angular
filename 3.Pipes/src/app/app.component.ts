import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Maycon";
  name2 = "mayCoN XaVIer HuaYAPa HuAMan";
  arreglo = [1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  hero = {
    name: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    address: {
      calle: 'Primera',
      casa: 19
    }
  };

  valuePromise = new Promise(( resolve, reject ) => {
    setTimeout(()=>resolve('Llegó la Data'), 3);
  });

  date = new Date();

  video = 'Mo4cmTaEDIk';

  activar:boolean = true;
}
