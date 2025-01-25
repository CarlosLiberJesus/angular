import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from './partials/partials.module';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PartialsModule, TemplateModule],
  exports: [PartialsModule, TemplateModule],
})
export class LayoutModule {}
