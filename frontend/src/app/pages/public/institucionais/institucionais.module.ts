import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageInstitucionaisComponent } from './institucionais.component';
import { PublicPageInstitucionaisPrivacidadeComponent } from './privacidade/privacidade.component';
import { PublicPageInstitucionaisMissaoComponent } from './missao/missao.component';
import { PublicPageInstitucionaisEquipaComponent } from './equipa/equipa.component';
import { PublicPageInstitucionaisContactosComponent } from './contactos/contactos.component';
import { InstitucionaisRoutingModule } from './institucionais-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstitucionaisRoutingModule,
    PublicPageInstitucionaisComponent,
    PublicPageInstitucionaisPrivacidadeComponent,
    PublicPageInstitucionaisMissaoComponent,
    PublicPageInstitucionaisEquipaComponent,
    PublicPageInstitucionaisContactosComponent
  ], exports: [
    PublicPageInstitucionaisComponent,
    PublicPageInstitucionaisPrivacidadeComponent,
    PublicPageInstitucionaisMissaoComponent,
    PublicPageInstitucionaisEquipaComponent,
    PublicPageInstitucionaisContactosComponent
  ]
})
export class InstitucionaisModule { }
