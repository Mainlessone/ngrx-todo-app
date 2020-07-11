import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToDoState } from '../store/todo.reducer';
import { CreateToDo } from '../store/todo.actions';
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

  onCreate(toDo: string): void {
    this.store$.dispatch(new CreateToDo({ toDo }))
  }

  ngOnInit(): void {
  }

}
