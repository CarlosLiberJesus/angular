import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSideBarComponent } from './side-bar/side-bar.component';
import { TemplateHeaderComponent } from './header/header.component';
import { TemplateContentComponent } from './content/content.component';
import { TemplateScrollTopComponent } from './scroll-top/scroll-top.component';
import { TemplateFooterComponent } from './footer/footer.component';
import { TemplateToolBarComponent } from './tool-bar/tool-bar.component';

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
