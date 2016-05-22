import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';

@Component({
  moduleId: module.id,
  selector: 'app-character',
  templateUrl: 'character.component.html',
  styleUrls: ['character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() c: Character;

  constructor(private cs: CharacterService) {
    console.log("char constructor");
  }

  ngOnInit() {
  }

  save(char: Character) {
    console.log(char);
    this.cs.saveCharacter(char);
  }

}
