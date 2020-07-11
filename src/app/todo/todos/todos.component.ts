import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() toDoList: ToDo[] = [];

  @Output() toggle = new EventEmitter<number>();
  @Output() edit = new EventEmitter<ToDo>();
  @Output() delete = new EventEmitter<number>();
  @Output() deleteAllDone = new EventEmitter();

  constructor() { }

  onToggle(event: Event, id: number): void {
    event.preventDefault();
    this.toggle.emit(id);
  }

  editToDo(todo: ToDo): void {
    this.edit.emit(todo);
  }

  deleteToDo(id: number): void {
    this.delete.emit(id);
  }

  deleteAllDoneTodos(): void {
    this.deleteAllDone.emit();
  }

  ngOnInit(): void {
  }

}
