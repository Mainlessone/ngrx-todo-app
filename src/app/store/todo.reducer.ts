import { ToDo } from '../todo/todo';
import { ToDoActions, toDoActionsType } from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface ToDoState {
  idIncrement: number;
  toDoList: ToDo[];
}

const initialState: ToDoState = {
  idIncrement: 1,
  toDoList: []
}

export const todoReducer = (state: ToDoState = initialState, action: ToDoActions) => {
  switch (action.type) {
    case toDoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        toDoList: [
          ...state.toDoList,
          {
            id: state.idIncrement,
            toDo: action.payload.toDo,
            completed: false
          }
        ]
      };
    default:
      return state;
  }
}
