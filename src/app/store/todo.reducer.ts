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
    case toDoActionsType.complete:
      return {
        ...state,
        toDoList: state.toDoList.map(todo => todo.id === action.payload.id ? {
          ...todo,
          isCompleted: !todo.isCompleted
        } : todo)
      };
    case toDoActionsType.delete:
      return {
        ...state,
        toDoList: state.toDoList.filter(todo => todo.id !== action.payload.id)
      };
    case toDoActionsType.deleteAllDone:
      return {
        ...state,
        toDoList: state.toDoList.filter(todo => !todo.isCompleted)
      }
    default:
      return state;
  }
}
