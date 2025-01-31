import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixedPagePeticoesComponent } from './peticoes.component';
import { InstitucionaisRoutingModule } from './peticoes-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstitucionaisRoutingModule,
    MixedPagePeticoesComponent,
  ],
  exports: [MixedPagePeticoesComponent],
})
export class PeticoesModule {}
