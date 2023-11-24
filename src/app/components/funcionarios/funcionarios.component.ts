import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionariosService } from '../../funcionarios.service';
import { Funcionario } from '../../Funcionario';
import { Gerente } from '../../Gerente';
import { GerentesService } from '../../gerentes.service';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})

export class FuncionariosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private funcionariosService : FuncionariosService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Funcionario';
    this.GerentesService.listar().subscribe(gerentes => {
      this.gerentes = gerentes;
      if (this.gerentes && this.gerentes.length > 0){
        this.formulario.get('gerenteNome')?.setValue(this.gerentes[].nome);
      }
    })
    this.formulario = new FormGroup({
      _nome: new FormControl(null),
      _cpf: new FormControl(null),
      _cargo: new FormControl(null),
      _idade: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const funcionario : Funcionario = this.formulario.value;
    this.funcionariosService.cadastrar(funcionario).subscribe(result => {
      alert('Sucesso.');
    })
  } 
}
