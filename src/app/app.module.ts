import { NovaTranferenciaComponent } from './nova-transferencia/nova-tranferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Essa linha é uma injeção de dependencia, informamos que o 'pt' se refere ao localePt
//Necessário verificar a inportação
registerLocaleData(localePt, 'pt')

@NgModule({
  // Nome dos componentes utilizados
  declarations: [
    AppComponent,
    NovaTranferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    //Inserimos a linha abaixo com o intuito de colocarmos o padrão brasiliero de hora, verifique a injeção de dependencia
    {provide: LOCALE_ID, useValue: 'pt'},
    //Inserimos a linha abaixo com o intuito de colocarmos o padrão brasiliero de moeda
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
