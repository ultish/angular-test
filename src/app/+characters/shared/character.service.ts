import { Injectable, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Character } from './character.model'

@Injectable()
export class CharacterService implements OnInit {
  characters: FirebaseListObservable<any[]>;

  constructor(private _af: AngularFire) {

  }

  ngOnInit() {
    console.log("calling characters");
    this.characters = this._af.database.list("/characters");
  }

  getCharacters(): FirebaseListObservable<any[]> {
    console.log("getCharacters called");
    return this.characters;
  }
}
