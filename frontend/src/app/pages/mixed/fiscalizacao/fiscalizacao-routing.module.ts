import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixedPageFiscalizacaoComponent } from './fiscalizacao.component';

const fiscalizacaoRoutes: Routes = [
  {
    path: '',
    component: MixedPageFiscalizacaoComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(fiscalizacaoRoutes)],
  exports: [RouterModule],
})
export class FiscalizacaoRoutingModule {}
