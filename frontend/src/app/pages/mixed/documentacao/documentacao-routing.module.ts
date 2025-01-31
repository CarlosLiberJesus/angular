import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixedPageDocumentacaoComponent } from './documentacao.component';

const documentacaoRoutes: Routes = [
  {
    path: '',
    component: MixedPageDocumentacaoComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(documentacaoRoutes)],
  exports: [RouterModule],
})
export class DocumentacaoRoutingModule {}
