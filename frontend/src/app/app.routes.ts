import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/public/homepage/homepage.component';
import { MetronicComponent } from './pages/public/documentation/metronic/metronic.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'metronic', component: MetronicComponent },
];
