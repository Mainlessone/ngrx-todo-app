import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() toDoList: ToDo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
