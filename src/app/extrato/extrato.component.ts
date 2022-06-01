import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  /*
  Criamos uma variável que vai receber as informações dentro da constante criada
  Para funcionar corretamente você pode inicializar a variável  : any = {},
  pois afinal ele é um dicionário, ou no html na interpolação você deve escrver transferencia?
  com o "?" após o nome da variável

  @Input() transferencias: any;
  */
  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.transferencias = this.service.transferencias;
    this.service.retornarTudo().subscribe((transferencias: Transferencia[]) => {
      //A linha abaixo é para devolver a infomação no console formatado
      //console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

  // Declarando um método

  //O método transferir recebe o valor e por fim imprimi o mesmo
  // transferir(dados){
  //   console.log(dados);
  //   this.transferencias = dados;
  // }
}
