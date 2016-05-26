import { Component, OnInit } from '@angular/core';
import { CharacterService } from './shared/character.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CharacterComponent } from './character/character.component';

@Component({
  moduleId: module.id,
  selector: 'app-characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.css'],
  providers: [CharacterService],
  directives: [CharacterComponent]
})
export class CharactersComponent implements OnInit {

  characters: FirebaseListObservable<any[]>;

  constructor(charService: CharacterService, af: AngularFire) {
    console.log("characters constructor");
    this.characters = charService.getCharacters();
  }

  ngOnInit() {
    
  }

}
