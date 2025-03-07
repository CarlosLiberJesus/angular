import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixedPageCidadaosComponent } from './cidadaos.component';
import { MixedPageCidadaoComponent } from './cidadao/cidadao.component';

const cidadaoRoutes: Routes = [
  {
    path: '',
    component: MixedPageCidadaosComponent,
  },
  { path: ':uuid', component: MixedPageCidadaoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(cidadaoRoutes)],
  exports: [RouterModule],
})
export class CidadaosRoutingModule {}
