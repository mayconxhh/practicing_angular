import { Component, OnInit } from '@angular/core';
import { HerosService, Hero } from '../../services/heros.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchTerm:string = null;
  searchHeros:Hero[] = [];

  constructor( private _herosService:HerosService,
               private _router:Router,
               private _activatedRoute:ActivatedRoute ) {

    this._activatedRoute.params.subscribe( params => {
      this.searchTerm = params['name'];
      this.searchHeros = this._herosService.searchHeros(this.searchTerm);
    });

  }

  ngOnInit() {
  }

  viewHero(idx:number){
    this._router.navigate( ['/hero', idx] );
  }

}
