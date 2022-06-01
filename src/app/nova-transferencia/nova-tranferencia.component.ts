import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  //Instanciando um objeto do tipo Evento, ele tem um génerico qualquer
  @Output() aoTransferir = new EventEmitter<any>();

  //Iniciando variáveis da classe
  valor: number;
  destino: string;

  constructor(private service: TransferenciaService, private router: Router){}

  //Criando métodos da classe
  transferir() {
    //Não é possível fazer ações de console.log fora de um método
    console.log('Solicitada nova transferência');

      //Essa estrutura aparentemente representa um dicionário
      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
      //Lançamos através do evento criado os valores dentro ca constante criada
      // this.aoTransferir.emit(valorEmitir);
      this.service.adicionar(valorEmitir).subscribe(resultado => {
        //console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error));
      // console.log('Não foi possível realizar a transferência, valores invalidos'))
    }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}
