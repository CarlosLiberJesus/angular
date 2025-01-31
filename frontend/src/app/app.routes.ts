import { Routes } from '@angular/router';
import { PublicPageHomepageComponent } from './pages/public/homepage/homepage.component';
import {
  trigger,
  transition,
  query,
  style,
  animate,
} from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
      optional: true,
    }),
    query(':enter', [style({ opacity: 0, transform: 'scale(0.9)' })], {
      optional: true,
    }),
    query(
      ':leave',
      [animate('0.3s ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))],
      {
        optional: true,
      }
    ),
    query(
      ':enter',
      [animate('0.4s ease-out', style({ opacity: 1, transform: 'scale(1)' }))],
      {
        optional: true,
      }
    ),
  ]),
]);

export const routes: Routes = [
  { path: '', component: PublicPageHomepageComponent },
  {
    path: 'documentacao',
    loadChildren: () =>
      import('./pages/public/documentation/documentation.module').then(
        m => m.DocumentationModule
      ),
  },
];
