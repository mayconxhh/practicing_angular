import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

	@Input("appResaltado") nuevoColor:string;

  constructor( private el:ElementRef ) {
  	console.log("Hola desde la directiva");
  	el.nativeElement.style.backgroundColor = "crimson";
  	el.nativeElement.style.color = "white";
  }

  @HostListener('mouseenter') mouseEntro(){
  	console.log(this.nuevoColor);
  	// this.el.nativeElement.style.backgroundColor = "white";
  	this.resaltar(this.nuevoColor || 'white');
  	this.el.nativeElement.style.color = "crimson";
  }

  @HostListener('mouseleave') mouseSalio(){
  	// this.el.nativeElement.style.backgroundColor = null;
  	this.resaltar(null);
  	this.el.nativeElement.style.color = null;
  }

  private resaltar(color:String){
  	this.el.nativeElement.style.backgroundColor = color;
  }

}
