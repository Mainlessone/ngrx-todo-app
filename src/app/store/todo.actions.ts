import { Action } from '@ngrx/store';
import { ToDo } from '../todo/todo';

export enum toDoActionsType {
  create = '[TODO] create todo item',
  edit = '[TODO] edit todo item',
  complete = '[TODO] complete todo item',
  delete = '[TODO] delete todo item',
  deleteAllDone = '[TODO] delete all done todo items'
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

  constructor() { }
}

export type ToDoActions = CreateToDo | CompleteToDo | DeleteToDo | DeleteAllDoneToDo | EditToDo;
