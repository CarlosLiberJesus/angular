import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPageInstitucionaisComponent } from './institucionais.component';
import { PublicPageInstitucionaisPrivacidadeComponent } from './privacidade/privacidade.component';
import { PublicPageInstitucionaisMissaoComponent } from './missao/missao.component';
import { PublicPageInstitucionaisEquipaComponent } from './equipa/equipa.component';
import { PublicPageInstitucionaisContactosComponent } from './contactos/contactos.component';

const publicInstituicioniasRoutes: Routes = [
  {
    path: '',
    component: PublicPageInstitucionaisComponent,
  },
  { path: 'missao', component: PublicPageInstitucionaisMissaoComponent },
  { path: 'equipa', component: PublicPageInstitucionaisEquipaComponent },
  { path: 'contactos', component: PublicPageInstitucionaisContactosComponent },
  {
    path: 'privacidade',
    component: PublicPageInstitucionaisPrivacidadeComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(publicInstituicioniasRoutes)],
  exports: [RouterModule],
})
export class InstitucionaisRoutingModule {}
