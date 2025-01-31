import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSideBarComponent } from './side-bar/side-bar.component';
import { TemplateHeaderComponent } from './header/header.component';
import { TemplateContentComponent } from './content/content.component';
import { TemplateScrollTopComponent } from '../partials/scroll-top/scroll-top.component';
import { TemplateFooterComponent } from './footer/footer.component';
import { TemplateToolBarComponent } from './tool-bar/tool-bar.component';
import { TemplateHeaderNavbarComponent } from './header/header-navbar/header-navbar.component';
import { TemplateHeaderMenuComponent } from './header/header-menu/header-menu.component';
import { TemplateSideBarMenuComponent } from './side-bar/side-bar-menu/side-bar-menu.component';
import { TemplateSideBarLogoComponent } from './side-bar/side-bar-logo/side-bar-logo.component';
import { TemplateSideBarFooterComponent } from './side-bar/side-bar-footer/side-bar-footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TemplateSideBarComponent,
    TemplateHeaderComponent,
    TemplateContentComponent,
    TemplateScrollTopComponent,
    TemplateFooterComponent,
    TemplateToolBarComponent,
    TemplateHeaderNavbarComponent,
    TemplateHeaderMenuComponent,
    TemplateSideBarMenuComponent,
    TemplateSideBarLogoComponent,
    TemplateSideBarFooterComponent,
  ],
  exports: [
    TemplateSideBarComponent,
    TemplateHeaderComponent,
    TemplateContentComponent,
    TemplateScrollTopComponent,
    TemplateFooterComponent,
    TemplateToolBarComponent,
  ],
})
export class TemplateModule {}
