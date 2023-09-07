import { Component, inject } from '@angular/core';
import { TodosService } from '../../service/todos.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  todosService = inject(TodosService);
  text: string = '';

  changeText(event: Event) {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo() {
    this.todosService.addTodo(this.text);

    this.text = '';
  }
}
