import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _choloHeroeService: HeroesService) { }

  ngOnInit(): void {
    console.log('Init');
    this.heroes = this._choloHeroeService.getHerores();
    //console.log(this.heroes);
  }

  /*verHeroe(i:number){
    console.log(i);
  }*/

}
