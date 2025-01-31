import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixedPageLegislacaoComponent } from './legislacao.component';

const legislacaoRoutes: Routes = [
  {
    path: '',
    component: MixedPageLegislacaoComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(legislacaoRoutes)],
  exports: [RouterModule],
})
export class LegislacaoRoutingModule {}
