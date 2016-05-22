import { Injectable, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Character } from './character.model'

@Injectable()
export class CharacterService implements OnInit {
  characters: FirebaseListObservable<any[]>;

  constructor(private _af: AngularFire) {
    console.log("char service constructor");
    this.characters = this._af.database.list("/characters");
  }

  ngOnInit() {
    console.log("calling characters");

  }

  getCharacters(): FirebaseListObservable<any[]> {
    console.log("getCharacters called");
    return this.characters;
  }

  saveCharacter(c: Character) {
    console.log("save char in service");
    this.characters.update(c.$key, { name: c.name });
  }
}
