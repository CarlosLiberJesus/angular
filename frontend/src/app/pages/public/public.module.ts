import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageHomepageComponent } from './homepage/homepage.component';
import { PublicPageSiteMapComponent } from './site-map/site-map.component';
import { DocumentationModule } from './documentation/documentation.module';
import { InstitucionaisModule } from './institucionais/institucionais.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicPageHomepageComponent,
    PublicPageSiteMapComponent,
    DocumentationModule,
    InstitucionaisModule,
  ],
  exports: [
    PublicPageHomepageComponent,
    PublicPageSiteMapComponent,
    DocumentationModule,
    InstitucionaisModule,
  ],
})
export class PublicPagesModule {}
