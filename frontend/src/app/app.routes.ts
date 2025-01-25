import { Routes } from '@angular/router';
import { PublicPageHomepageComponent } from './pages/public/homepage/homepage.component';
import { PublicPageDocumentationMetronicComponent } from './pages/public/documentation/metronic/metronic.component';

export const routes: Routes = [
  { path: '', component: PublicPageHomepageComponent },
  { path: 'metronic', component: PublicPageDocumentationMetronicComponent },
];
