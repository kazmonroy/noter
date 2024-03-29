import { Injectable, OnInit, signal } from '@angular/core';
import { Filters, Todo } from '../types/todos.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosSig = signal<Todo[]>([]);
  filtersSig = signal<Filters>(Filters.all);

  LOCAL_STORAGE_KEY = 'todos';

  constructor() {}

  getLocalTodos() {
    return JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY) || '[]');
  }

  addTodo(text: string) {
    if (!text) {
      return;
    }
    const newTodo: Todo = {
      text,
      isDone: false,
      id: Math.random().toString(16),
    };

    this.todosSig.update((todos) => [...todos, newTodo]);

    localStorage.setItem(
      this.LOCAL_STORAGE_KEY,
      JSON.stringify([...this.todosSig()])
    );
  }

  changeFilter(filterName: Filters) {
    this.filtersSig.set(filterName);
  }

  updateTodo(id: string, text: string) {
    this.todosSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
  }

  removeTodo(id: string) {
    this.todosSig.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: string) {
    this.todosSig.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  toggleAllTodos(isDone: boolean) {
    this.todosSig.update((todos) => todos.map((todo) => ({ ...todo, isDone })));
  }
}
