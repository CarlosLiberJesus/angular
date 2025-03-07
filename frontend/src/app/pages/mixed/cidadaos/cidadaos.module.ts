import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadaosRoutingModule } from './cidadaos-routing.module';
import { MixedPageCidadaoComponent } from './cidadao/cidadao.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, CidadaosRoutingModule, MixedPageCidadaoComponent],
  exports: [CidadaosRoutingModule],
})
export class CidadaosModule {}
