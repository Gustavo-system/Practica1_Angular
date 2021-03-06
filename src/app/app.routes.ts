import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeoreComponent } from './components/heore/heore.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'person', component: HeroesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'h/:id', component:HeoreComponent},
    { path: 'buscar/:termino', component:BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
