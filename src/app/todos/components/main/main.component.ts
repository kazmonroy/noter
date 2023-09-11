import { Component, OnInit, computed, inject } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { Filters } from '../../types/todos.interface';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private todosService = inject(TodosService);
  editingId: string | null = null;
  LOCAL_TODOS!: any;

  isAllTodoSelected = computed(() =>
    this.todosService.todosSig().every((todo) => todo.isDone)
  );

  noTodosClass = computed(() => this.todosService.todosSig().length === 0);

  visibleTodos = computed(() => {
    const todos = this.todosService.todosSig();
    const filter = this.todosService.filtersSig();

    if (filter === Filters.active) {
      return todos.filter((todo) => !todo.isDone);
    } else if (filter === Filters.done) {
      return todos.filter((filter) => filter.isDone);
    } else {
      return todos;
    }
  });

  ngOnInit(): void {
    this.LOCAL_TODOS = this.todosService.getLocalTodos();
  }

  setEditingId(editingId: string | null) {
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event) {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAllTodos(target.checked);
  }
}
