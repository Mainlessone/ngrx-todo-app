import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToDoState } from '../store/todo.reducer';
import { CreateToDo, DeleteToDo, CompleteToDo, DeleteAllDoneToDo, EditToDo } from '../store/todo.actions';
import { ToDo } from './todo';
import { toDoListSelector } from '../store/todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  toDoList$: Observable<ToDo[]> = this.store$.pipe(select(toDoListSelector));

  constructor(private store$: Store<ToDoState>) {
  }

  onToggle(id: number): void {
    this.store$.dispatch(new CompleteToDo({ id }));
  }

  onCreate(toDo: string): void {
    this.store$.dispatch(new CreateToDo({ toDo }));
  };

  onEdit({ toDo, id }): void {
    this.store$.dispatch(new EditToDo({ toDo, id }))
  }

  onDelete(id: number): void {
    this.store$.dispatch(new DeleteToDo({ id }));
  }

  onDeleteAllDone(): void {
    this.store$.dispatch(new DeleteAllDoneToDo());
  }

  ngOnInit(): void {
  }

}
