import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPageDocumentationComponent } from './documentation.component';

const publicDocumentationRoutes: Routes = [
  {
    path: '',
    component: PublicPageDocumentationComponent,
    children: [
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: 'metronic', component: PublicPageDocumentationComponent },
      { path: 'angular', component: PublicPageDocumentationComponent },
      { path: 'laravel', component: PublicPageDocumentationComponent },
      { path: '**', redirectTo: 'default', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(publicDocumentationRoutes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
