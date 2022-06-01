import { getLocaleDayPeriods } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Transferencia } from '../models/transferencia.model';

//Possível injetar a dependencia a esse service diretamente no construtor
@Injectable({
  //ciclo de vida desse componente está em todo o projeto
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  // Esse servidor subiu com a ferramenta Json Server
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  retornarTudo(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable <Transferencia>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url,transferencia)
    // this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: Transferencia){
    transferencia.data = new Date();
  }
}
