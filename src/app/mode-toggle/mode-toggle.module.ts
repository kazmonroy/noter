import { NgModule } from '@angular/core';

import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from './services/mode-storage.service';
import { ModeToggleComponent } from './component/mode-toggle.component';
import { ModeToggleService } from './services/mode-toggle.service';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';

/**
 * Angular module for mode toggling feature
 * Contains
 *  * ModeToggleComponent
 *  * ModeToggleService
 */
@NgModule({
  declarations: [ModeToggleComponent],
  imports: [CommonModule, IconsModule],
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
  exports: [ModeToggleComponent],
})
export class ModeToggleModule {}
