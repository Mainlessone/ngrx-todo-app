import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoState, TODO_REDUCER_NODE } from './todo.reducer';


export const toDoFeatureSelector = createFeatureSelector<ToDoState>(TODO_REDUCER_NODE);

export const toDoListSelector = createSelector(
  toDoFeatureSelector,
  state => state.toDoList
)
