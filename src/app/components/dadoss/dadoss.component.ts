import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DadossService } from '../../dadoss.service';
import { Dados } from '../../Dados';


@Component({
  selector: 'app-dadoss',
  templateUrl: './dadoss.component.html',
  styleUrls: ['./dadoss.component.css']
})
export class DadossComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  
  constructor(private dadossService : DadossService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Novos Dados';
    this.formulario = new FormGroup({
      _nome: new FormControl(null),
      _cpf: new FormControl(null),
      _cargo: new FormControl(null),
      _idade: new FormControl(null),
      _escolaridade: new FormControl(null),
      _especializacao: new FormControl(null)
    })
  }
  enviarFormulario(): void {
    const dadoss : Dados = this.formulario.value;
    this.dadossService.cadastrar(dadoss).subscribe(result => {
      alert('Sucesso.');
    })
  } 
}
