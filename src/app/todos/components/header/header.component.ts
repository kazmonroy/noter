import { Component, OnInit, computed, inject } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { ModeToggleService } from 'src/app/mode-toggle/services/mode-toggle.service';
import { Mode } from 'src/app/mode-toggle/types/mode-toggle.model';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  modeToggleService = inject(ModeToggleService);
  todosService = inject(TodosService);
  text: string = '';
  currentMode: Mode = Mode.LIGHT;

  noTodosClass = computed(() => this.todosService.todosSig().length === 0);
  ngOnInit(): void {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }

  changeText(event: Event) {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo() {
    this.todosService.addTodo(this.text);

    this.text = '';
  }
}
