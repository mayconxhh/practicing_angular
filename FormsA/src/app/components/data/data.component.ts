import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

	form:FormGroup;

	usuario:Object = {
		completName: {
			name: 'Maycon',
			lastname: 'Huayapa'
		},
		email: 'mayconxhh@gmail.com',
		hobbies: [ 'correr', 'dormir', 'comer']

	}

  constructor() {
  	console.log(this.usuario)

  	this.form = new FormGroup({

  		'completName': new FormGroup({
	  		'name': new FormControl('', [
	  																	Validators.required,
	  																	Validators.minLength(5)
	  																]),
	  		'lastname':new FormControl('', [ Validators.required,
	  																			this.noLastname
	  																	 ])  			
  		}),
  		'email': new FormControl('', [ 
  																	Validators.required, 
  																	Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
  																]),
  		'hobbies': new FormArray([
  			new FormControl('', Validators.required )
  		]),
  		'username': new FormControl('', Validators.required, this.existUser ),
  		'password': new FormControl( '', Validators.required ),
  		'confirmPassword': new FormControl()
  	});

  	// this.form.setValue( this.usuario );

  	this.form.controls['confirmPassword'].setValidators([ 
			Validators.required,
			this.equalData.bind(this.form)
		])

		this.form.controls['username'].valueChanges
			.subscribe( data => {
				console.log(data);
			})

		this.form.controls['username'].statusChanges
			.subscribe( data => {
				console.log(data);
			})

  }

  ngOnInit() {
  }

  addHobbie(){
  	(<FormArray>this.form.controls['hobbies']).push(
  		new FormControl('', Validators.required )
  	)
  }

  noLastname( control:FormControl ): { [s:string]:boolean } {
  	if (control.value==="huayapa") {
  		return {
  			noHuayapa:true
  		}
  	}

  	return null;
  }

  equalData( control:FormControl ): { [s:string]:boolean } {

  	let form:any = this;
  	if (control.value !== form.controls['password'].value ) {
  		return {
  			noEquals:true
  		}
  	}

  	return null;
  }

  existUser( control:FormControl): Promise<any>|Observable<any>{
  	let promise = new Promise(
  			(resolve, reject)=>{
  				setTimeout( ()=>{
  					if (control.value === 'strider') {
  						resolve({exist: true})
  					} else {
  						resolve(null)
  					}
  				}, 3000 )
  			}
  		)

  	return promise;
  }

  saveData(){
  	console.log(this.form);
  	console.log(this.form.value);
  	this.form.reset();
  }

}
