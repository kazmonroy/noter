import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos/todos.component';
import { HeaderComponent } from './todos/components/header/header.component';
import { FooterComponent } from './todos/components/footer/footer.component';
import { MainComponent } from './todos/components/main/main.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todos/components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
