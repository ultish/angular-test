import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { CharactersComponent } from './+characters';

@Component({
  moduleId: module.id,
  selector: 'pooh-app',
  templateUrl: 'pooh.component.html',
  styleUrls: ['pooh.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/characters', component: CharactersComponent}
])
export class PoohAppComponent {
  items: FirebaseListObservable<any[]>;
  title = 'pooh works!';
  
  constructor(af: AngularFire) {
    console.log("fire");
    this.items = af.database.list('/tests');
    
  }
  
}
