import { Component, OnInit } from '@angular/core';
import { HerosService, Hero } from '../../services/heros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html'
})
export class HerosComponent implements OnInit {

  heros:Hero[] = [];

  constructor( private _herosService:HerosService,
               private _router:Router) { 

    console.log('Constructor');

  }

  ngOnInit() {

    this.heros = this._herosService.getHeros();

    console.log(this.heros);

  }

  viewHero(idx:number){
    this._router.navigate( ['/hero', idx] );
  }

}
