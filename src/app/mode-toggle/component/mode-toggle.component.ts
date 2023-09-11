import { Component, OnInit, inject } from '@angular/core';
import { ModeToggleService } from '../services/mode-toggle.service';
import { Observable } from 'rxjs';
import { Mode } from '../types/mode-toggle.model';

/**
 * Angular component to switch the Mode
 * Also developers can create their own components with the use of `ModeToggleService`
 * @example
 * ```
 * <app-mode-toggle></app-mode-toggle>
 * ```
 */
@Component({
  selector: 'app-mode-toggle',
  templateUrl: 'mode-toggle.component.html',
  styleUrls: ['mode-toggle.component.scss'],
})
export class ModeToggleComponent implements OnInit {
  constructor(private modeToggleService: ModeToggleService) {}

  currentMode$: Observable<Mode> = this.modeToggleService.modeChanged$;
  ngOnInit(): void {}
  toggle() {
    this.modeToggleService.toggleMode();
  }
}
