import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/character.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.css'],
  providers: [CharacterService]
})
export class CharactersComponent implements OnInit {

  characters: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire, charService: CharacterService) {
    // this.characters = charService.getCharacters();
    console.log("char component");
    this.characters = af.database.list('/tests');
  }
  
  ngOnInit() {
  }

}
