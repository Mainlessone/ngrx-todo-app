import { Action } from '@ngrx/store';

export enum toDoActionsType {
  create = '[TODO] create todo item',
  delete = '[TODO] delete todo item'
}

export class CreateToDo implements Action {
  readonly type = toDoActionsType.create;

  constructor(public payload: { toDo: string }) { }
}

export class DeleteToDo implements Action {
  readonly type = toDoActionsType.delete;

  constructor(public payload: { toDo: string }) { }
}


export type ToDoActions = CreateToDo | DeleteToDo;
