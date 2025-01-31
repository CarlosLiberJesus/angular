import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageHomepageComponent } from './homepage/homepage.component';
import { DocumentationModule } from './documentation/documentation.module';
import { InstitucionaisModule } from './institucionais/institucionais.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicPageHomepageComponent,
    DocumentationModule,
    InstitucionaisModule,
  ],
  exports: [
    PublicPageHomepageComponent,
    DocumentationModule,
    InstitucionaisModule,
  ],
})
export class PublicPagesModule {}
