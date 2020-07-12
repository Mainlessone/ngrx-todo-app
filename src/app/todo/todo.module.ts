import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from '../store/todo.reducer';
import { TodoinputComponent } from './todoinput/todoinput.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { TodoeditComponent } from './todoedit/todoedit.component'
import { TodoStorageService } from '../service/todo-storage.service';


@NgModule({
  declarations: [TodoComponent, TodoinputComponent, TodosComponent, TodoeditComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    FormsModule
  ],
  providers: [TodoStorageService],
  exports: [TodoComponent],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
