import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.scss']
})
export class TodoinputComponent implements OnInit {

  toDo: string;

  @Output() createToDo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  addToDo(): void {
    if (this.toDo) {
      this.createToDo.emit(this.toDo);
      this.toDo = '';
    }
  }

  ngOnInit(): void {
  }

}
