import { NgModule } from '@angular/core';

import {
  MODE_STORAGE_SERVICE,
  ModeLocalStorageService,
} from './services/mode-storage.service';
import { ModeToggleComponent } from './component/mode-toggle.component';
import { ModeToggleService } from './services/mode-toggle.service';

/**
 * Angular module for mode toggling feature
 * Contains
 *  * ModeToggleComponent
 *  * ModeToggleService
 */
@NgModule({
  declarations: [ModeToggleComponent],
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
