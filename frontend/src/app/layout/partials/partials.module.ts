import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TemplateScrollTopComponent } from './scroll-top/scroll-top.component';
import { PublicPageSiteMapComponent } from './site-map/site-map.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThemeSwitcherComponent,
    PageTitleComponent,
    TemplateScrollTopComponent,
    PublicPageSiteMapComponent,
  ],
  exports: [
    ThemeSwitcherComponent,
    PageTitleComponent,
    TemplateScrollTopComponent,
    PublicPageSiteMapComponent,
  ],
})
export class PartialsModule {}
