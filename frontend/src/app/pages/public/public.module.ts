import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageHomepageComponent } from './homepage/homepage.component';
import { DocumentationModule } from './documentation/documentation.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PublicPageHomepageComponent, DocumentationModule],
  exports: [PublicPageHomepageComponent, DocumentationModule],
})
export class PublicPagesModule {}
