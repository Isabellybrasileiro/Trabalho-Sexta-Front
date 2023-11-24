import {Gerente} from "./Gerente";

export class Funcionario
{ 
   gerente: Gerente | undefined;
   _nome: string = '';
   _cpf: string = '';
   _cargo : string = '';
   _idade: number = 0 ;
}
