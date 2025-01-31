import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPagesModule } from './public/public.module';
import { PrivatePagesModule } from './private/private.module';
import { MixedPagesModule } from './mixed/mixed.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PublicPagesModule, PrivatePagesModule, MixedPagesModule],
  exports: [PublicPagesModule, PrivatePagesModule, MixedPagesModule],
})
export class PagesModule {}
