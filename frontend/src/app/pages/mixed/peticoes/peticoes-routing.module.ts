import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixedPagePeticoesComponent } from './peticoes.component';

const peticoesRoutes: Routes = [
  {
    path: '',
    component: MixedPagePeticoesComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(peticoesRoutes)],
  exports: [RouterModule],
})
export class InstitucionaisRoutingModule {}
