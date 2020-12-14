import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeoreComponent } from './components/heore/heore.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'person', component: HeroesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'h/:id', component:HeoreComponent},
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});