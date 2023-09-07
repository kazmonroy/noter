import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { Filters } from '../../types/todos.interface';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  todosService = inject(TodosService);
  filterSig = this.todosService.filtersSig;

  activeCount = computed(() => {
    return this.todosService.todosSig().filter((todo) => !todo.isDone).length;
  });

  noTodosClass = computed(() => this.todosService.todosSig().length === 0);

  itemsLeftText = computed(
    () => `item${this.activeCount() === 1 ? 's' : ''} left`
  );

  todoFilter = Filters;
  changeFilter(event: Event, filterName: Filters) {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
    // console.log(this.filterSig(), `${this.todosService.filtersSig()}`);
  }
}
