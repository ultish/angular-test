import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { DashboardComponent } from './+dashboard';
import { CharactersComponent } from './+characters';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'pooh-app',
  templateUrl: 'pooh.component.html',
  styleUrls: ['pooh.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdToolbar, MdButton, MdIcon],
  providers: [ROUTER_PROVIDERS, MdIconRegistry]
})
@Routes([
  { path: '/dashboard', component: DashboardComponent },
  { path: '/characters', component: CharactersComponent }
])
export class PoohAppComponent {
  items: FirebaseListObservable<any[]>;
  title = 'pooh works!';

  constructor(af: AngularFire) {
    console.log("fire");
    this.items = af.database.list('/tests');

  }

}
