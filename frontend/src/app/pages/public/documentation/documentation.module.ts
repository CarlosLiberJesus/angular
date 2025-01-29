import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { PublicPageDocumentationMetronicComponent } from './metronic/metronic.component';
import { PublicPageDocumentationComponent } from './documentation.component';
import { PublicPageDocumentationAngularComponent } from './angular/angular.component';
import { PublicPageDocumentationLaravelComponent } from './laravel/laravel.component';
import { PageMetaService } from '../../../services/page-meta.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    PublicPageDocumentationComponent,
    PublicPageDocumentationMetronicComponent,
    PublicPageDocumentationAngularComponent,
    PublicPageDocumentationLaravelComponent
  ],
  providers: [PageMetaService],
  exports: [PublicPageDocumentationComponent],
})
export class DocumentationModule {}
