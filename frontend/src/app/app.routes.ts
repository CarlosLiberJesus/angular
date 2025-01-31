import { Routes } from '@angular/router';
import { PublicPageHomepageComponent } from './pages/public/homepage/homepage.component';
import {
  trigger,
  transition,
  query,
  style,
  animate,
} from '@angular/animations';
import { PublicPageSiteMapComponent } from './layout/partials/site-map/site-map.component';

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
  { path: 'mapa-site', component: PublicPageSiteMapComponent },
  {
    path: 'institucionais',
    loadChildren: () =>
      import('./pages/public/institucionais/institucionais.module').then(
        m => m.InstitucionaisModule
      ),
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./pages/public/documentation/documentation.module').then(
        m => m.DocumentationModule
      ),
  },
  {
    path: 'documentacao',
    loadChildren: () =>
      import('./pages/mixed/documentacao/documentacao.module').then(
        m => m.DocumentacaoModule
      ),
  },
  {
    path: 'legislacao',
    loadChildren: () =>
      import('./pages/mixed/legislacao/legislacao.module').then(
        m => m.LegislacaoModule
      ),
  },
  {
    path: 'fiscalizacao',
    loadChildren: () =>
      import('./pages/mixed/fiscalizacao/fiscalizacao.module').then(
        m => m.FiscalizacaoModule
      ),
  },
  {
    path: 'peticoes',
    loadChildren: () =>
      import('./pages/mixed/peticoes/peticoes.module').then(
        m => m.PeticoesModule
      ),
  },
];
