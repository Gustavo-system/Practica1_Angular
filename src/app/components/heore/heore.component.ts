import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heore',
  templateUrl: './heore.component.html'
})
export class HeoreComponent implements OnInit {

  heroe:any={};

  constructor(private activateRout: ActivatedRoute,
              private _heroeService:HeroesService) { 
    this.activateRout.params.subscribe(params => {
      //console.log(params['id']);
      this.heroe = this._heroeService.getHeroe( params ['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
