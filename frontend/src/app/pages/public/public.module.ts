import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentationModule } from './documentation/documentation.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomepageComponent, DocumentationModule],
  exports: [HomepageComponent, DocumentationModule],
})
export class PublicPagesModule {}
