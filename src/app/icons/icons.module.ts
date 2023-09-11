import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Github, Moon, Sun } from 'angular-feather/icons';

const icons = {
  Github,
  Moon,
  Sun,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
