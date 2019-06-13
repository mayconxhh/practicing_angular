import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
		.ng-invalid.ng-touched:not(form) {
			border: 1px solid red;
		}
  `]
})
export class TemplateComponent {

	usuario:Object = {
		name: null,
		lastname: null,
		email: null,
		pais: "",
		gender: null,
		acepta: false
	}

	paises = [{
		code:"CRI",
		name: "Costa Rica"
	},{
		code: "PER",
		name: "Perú"
	}, {
		code: "ESP",
		name: "España"
	}]

	genders:string[] = ["Masculino", "Femenino"]

  constructor() { }

  save(form:NgForm){
  	console.log("ngForm: ",form);
  	console.log("Valores forma:", form.value);

  	console.log("usuario: ", this.usuario)
  }

}
