import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToDoState } from '../store/todo.reducer';
import { toDoFeatureSelector } from '../store/todo.selectors';
import { filter } from 'rxjs/operators'
import { LoadToDoState } from '../store/todo.actions';

export const TODO_LOCALSTORAGE_KEY = 'todo'

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  private isInited: boolean = false;

  constructor(private store$: Store<ToDoState>) { }

  init(): void {
    if (this.isInited) return;
    else {
      this.isInited = true;
      this.loadFromStorage();

      this.store$.pipe(
        select(toDoFeatureSelector),
        filter(state => !!state)
      ).subscribe(state => localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state)));

      window.addEventListener('storage', () => this.loadFromStorage());

    }

  }

  private loadFromStorage(): void {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if (storageState) this.store$.dispatch(new LoadToDoState({ state: JSON.parse(storageState) }));
  }

}
