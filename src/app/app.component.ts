import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bytebank';

  /*
  Injetando dependencias que possuam a notação Injetable, pode ser feito diretamente no construtor
  o nome service na frente é o nome que deve ser utilizado para indicar o item sendo injetado
  */
  constructor(private service: TransferenciaService){
  }

  /*
  Criamos uma variável que vai receber as informações dentro da constante criada
  Para funcionar corretamente você pode inicializar a variável  : any = {},
  pois afinal ele é um dicionário, ou no html na interpolação você deve escrver transferencia?
  com o "?" após o nome da variável
  tranferencia: any;
  */

  /*
  Ao instanciar um array, lembrar de iniciar ele, caso o contrário, não irá funcionar.
  transferencias: any[] = [];
  */

  // Declarando um método

  //O método transferir recebe o valor e por fim imprimi o mesmo
 // transferir(dados){
    /*
    Os "..." é um sistema de descontruir a informação, sem eles a variavel teria recebido um array mais um data
    com eles, o array recebido foi incrementado e adicionado a nova variavel, desse modo ao invés de propagarmos o evento, propagamos a tranferencia, pois ele possui todos os dados. De maneira geral é o mesmo array com a adição de informação;

    const transferencia = {...dados, data: new Date()}
    */
    /*
    this.tranferencia = dados
    */
    /*
    Desconsiderado após a criação do const transferencia
    this.transferencias.push(dados);
    */
    /*
    this.transferencias.push(transferencia);
    */
    //this.service.adicionar(dados);
//}
}
