import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'pooh-app',
  templateUrl: 'pooh.component.html',
  styleUrls: ['pooh.component.css']
})
export class PoohAppComponent {
  items: FirebaseListObservable<any[]>;
  title = 'pooh works!';
  
  constructor(af: AngularFire) {
    console.log("fire");
    
    this.items = af.database.list('/tests');
    
    console.log(this.items);
  }
  
}
