import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  editIds: number[] = [];

  @Input() toDoList: ToDo[] = [];

  @Output() toggle = new EventEmitter<number>();
  @Output() edit = new EventEmitter<{ toDo: string, id: number }>();
  @Output() delete = new EventEmitter<number>();
  @Output() deleteAllDone = new EventEmitter();

  constructor() { }

  onToggle(event: Event, id: number): void {
    event.preventDefault();
    this.toggle.emit(id);
  }

  onEdit(toDo: string, id: number): void {
    this.editIds = this.editIds.filter(item => item !== id);
    this.edit.emit({ toDo, id });
  }

  editToDo(id: number): void {
    this.editIds.push(id);
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
