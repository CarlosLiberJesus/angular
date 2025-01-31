import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeticoesModule } from './peticoes/peticoes.module';
import { LegislacaoModule } from './legislacao/legislacao.module';
import { FiscalizacaoModule } from './fiscalizacao/fiscalizacao.module';
import { DocumentacaoModule } from './documentacao/documentacao.module';
import { MixedPageMixedComponent } from './mixed.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PeticoesModule,
    LegislacaoModule,
    FiscalizacaoModule,
    DocumentacaoModule,
    MixedPageMixedComponent,
  ],
  exports: [
    PeticoesModule,
    LegislacaoModule,
    FiscalizacaoModule,
    DocumentacaoModule,
    MixedPageMixedComponent,
  ],
})
export class MixedPagesModule {}
