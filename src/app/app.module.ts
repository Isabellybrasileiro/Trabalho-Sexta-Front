import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';

import { FuncionariosService } from './funcionarios.service';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';



import { DiretorsService } from './diretors.service';
import {  DiretorsComponent } from './components/diretors/diretors.component';

import { GerentesService } from './gerentes.service';
import {  GerentesComponent } from './components/gerentes/gerentes.component';


import { FuncionarioADMsService } from './funcionario-adms.service';
import {  FuncionarioADMsComponent } from './components/funcionario-adms/funcionario-adms.component';

import { DadossService } from './dadoss.service';
import {  DadossComponent } from './components/dadoss/dadoss.component';

import { FuncionariorhsService } from './funcionariorhs.service';
import { FuncionariorhsComponent } from './components/funcionariorhs/funcionariorhs.component';


@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    DadossComponent,
    FuncionariorhsComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, FuncionariosService,  DiretorsService, GerentesService, FuncionarioADMsService, DadossService , FuncionariorhsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
