import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioRH} from './FuncionarioRH';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FuncionariorhsService {
  apiUrl = 'http://localhost:5000/Funcionariorh';
  constructor(private http: HttpClient) { }
  listar(): Observable<FuncionarioRH[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<FuncionarioRH[]>(url);
  }
  buscar(nome: string): Observable<FuncionarioRH> {
    const url = `${this.apiUrl}/buscar/${nome}`;
    return this.http.get<FuncionarioRH>(url);
  }
  cadastrar(funcionariorh: FuncionarioRH): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<FuncionarioRH>(url, funcionariorh, httpOptions);
  }
  atualizar(funcionariorh: FuncionarioRH): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<FuncionarioRH>(url, funcionariorh, httpOptions);
  }
  excluir(nome: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${nome}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
