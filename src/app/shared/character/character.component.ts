import { Component, OnInit, Input } from '@angular/core';
import {Character} from '../character.model';

@Component({
  moduleId: module.id,
  selector: 'app-character',
  templateUrl: 'character.component.html',
  styleUrls: ['character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() c: Character; 
  
  constructor() {
    console.log("char constructor")
  }

  ngOnInit() {
  }

}
