import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.scss']
})
export class TodoeditComponent implements OnInit {

  toDo = '';

  @Input() todo: ToDo;

  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  onEdit(): void {
    if (this.toDo) this.edit.emit(this.toDo);
  }

  onCancel(): void {
    this.toDo = this.todo.toDo;
  }

  deleteToDo(id: number): void {
    this.delete.emit(id);
  }

  ngOnInit(): void {
    this.toDo = this.todo.toDo;

  }

}
