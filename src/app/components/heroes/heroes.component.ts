import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // esto ya es una variable local dentro del componente
  heroes:Heroe[] = [];

  constructor( private _choloHeroeService: HeroesService, private _router:Router) { }

  ngOnInit(): void {
    console.log('Init');
    this.heroes = this._choloHeroeService.getHerores();
    //console.log(this.heroes);
  }

  verHeroe( idx:number ){
    console.log(idx);
    this._router.navigate(['/h', idx]);
  }

}
