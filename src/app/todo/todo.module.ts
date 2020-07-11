import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from '../store/todo.reducer';
import { TodoinputComponent } from './todoinput/todoinput.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component'


@NgModule({
  declarations: [TodoComponent, TodoinputComponent, TodosComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    FormsModule
  ],
  exports: [TodoComponent],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
