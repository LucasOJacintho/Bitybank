import { NovaTranferenciaComponent } from './nova-transferencia/nova-tranferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  //A linha abaixo é redirecionamento da página quando o caminho inserido é vazio
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path:'extrato', component: ExtratoComponent},
  {path:'nova-transferencia', component: NovaTranferenciaComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
