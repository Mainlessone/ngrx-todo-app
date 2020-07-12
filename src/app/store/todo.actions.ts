import { Action } from '@ngrx/store';
import { ToDoState } from './todo.reducer';

export enum toDoActionsType {
  create = '[TODO] create todo item',
  edit = '[TODO] edit todo item',
  complete = '[TODO] complete todo item',
  delete = '[TODO] delete todo item',
  deleteAllDone = '[TODO] delete all done todo items',
  loadToDoState = '[TODO] load todo state'
}

export class CreateToDo implements Action {
  readonly type = toDoActionsType.create;

  constructor(public payload: { toDo: string }) { }
}

export class EditToDo implements Action {
  readonly type = toDoActionsType.edit;

  constructor(public payload: { toDo: string, id: number }) { }
}

export class CompleteToDo implements Action {
  readonly type = toDoActionsType.complete;

  constructor(public payload: { id: number }) { }
}

export class DeleteToDo implements Action {
  readonly type = toDoActionsType.delete;

  constructor(public payload: { id: number }) { }
}

export class DeleteAllDoneToDo implements Action {
  readonly type = toDoActionsType.deleteAllDone;
}

export class LoadToDoState implements Action {
  readonly type = toDoActionsType.loadToDoState;

  constructor(public payload: { state: ToDoState }) { }
}

export type ToDoActions = CreateToDo | CompleteToDo | DeleteToDo | DeleteAllDoneToDo | EditToDo | LoadToDoState;
