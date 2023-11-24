import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionariorhsService } from '../../funcionariorhs.service';
import { FuncionarioRH } from '../../FuncionarioRH';


@Component({
  selector: 'app-funcionariorhs',
  templateUrl: './funcionariorhs.component.html',
  styleUrls: ['./funcionariorhs.component.css']
})
export class FuncionarioRHComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private funcionariorhsService : FuncionariorhsService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novos Dados';
    this.formulario = new FormGroup({
      _nome: new FormControl(null),
      _cpf: new FormControl(null),
      _cargo: new FormControl(null),
      _idade: new FormControl(null),
      _matricula: new FormControl(null),
     
    })
  }
  enviarFormulario(): void {
    const funcionariorhs : FuncionarioRH = this.formulario.value;
    this.funcionariorhsService.cadastrar(funcionariorhs).subscribe(result => {
      alert('Sucesso.');
    })
  } 
}
