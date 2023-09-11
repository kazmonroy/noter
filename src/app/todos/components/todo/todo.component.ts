import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { Todo } from '../../types/todos.interface';
import { TodosService } from '../../service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnChanges {
  todosService = inject(TodosService);
  @Input({ required: true }) todo!: Todo;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  @ViewChild('textInput') textInput!: ElementRef;

  editingText = '';

  ngOnInit(): void {
    this.editingText = this.todo.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput!.nativeElement.focus();
      }, 0);
    }
  }

  changeText(event: Event) {
    const newText = (event.target as HTMLInputElement).value;
    this.editingText = newText;
  }

  changeTodo() {
    this.todosService.updateTodo(this.todo.id, this.editingText);
    this.setEditingId.emit(null);
  }

  removeTodo() {
    this.todosService.removeTodo(this.todo.id);
  }

  toggleTodo() {
    this.todosService.toggleTodo(this.todo.id);
  }

  setTodoEditingMode() {
    this.setEditingId.emit(this.todo.id);
    console.log('cliecked!');
  }
}
