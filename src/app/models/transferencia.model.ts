// Necessário mudar o nome do modelo, para que você consiga referencia e fazer a importação corretamente
export interface Transferencia {
  // o interrogação nesse caso significa que o valor é opcional => nullable
  // O pipe atribui a caracterítica de ou
  id?: number | string;
  valor: number;
  destino: string;
  data?: Date;
}
