import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageMetaService } from '../../services/page-meta.service';
import { ThemeSwitcherService } from '../../services/theme-switcher.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, ThemeSwitcherComponent, PageTitleComponent],
  exports: [ThemeSwitcherComponent, PageTitleComponent],
  providers: [PageMetaService, ThemeSwitcherService],
})
export class PartialsModule {}
