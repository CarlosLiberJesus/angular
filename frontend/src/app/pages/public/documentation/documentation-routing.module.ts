import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPageDocumentationComponent } from './documentation.component';
import { PublicPageDocumentationMetronicComponent } from './metronic/metronic.component';
import { PublicPageDocumentationAngularComponent } from './angular/angular.component';
import { PublicPageDocumentationLaravelComponent } from './laravel/laravel.component';

const publicDocumentationRoutes: Routes = [
  { path: '', component: PublicPageDocumentationComponent },
  { path: 'metronic', component: PublicPageDocumentationMetronicComponent },
  { path: 'angular', component: PublicPageDocumentationAngularComponent },
  { path: 'laravel', component: PublicPageDocumentationLaravelComponent },

];

@NgModule({
  imports: [RouterModule.forChild(publicDocumentationRoutes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}