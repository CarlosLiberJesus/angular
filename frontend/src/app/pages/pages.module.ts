import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPagesModule } from './public/public.module';
import { PrivatePagesModule } from './private/private.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PublicPagesModule, PrivatePagesModule],
  exports: [PublicPagesModule, PrivatePagesModule],
})
export class PagesModule {}
