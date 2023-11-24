import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dados } from './Dados';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DadossService {
  apiUrl = 'http://localhost:5000/Dados';
  constructor(private http: HttpClient) { }
  listar(): Observable<Dados[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Dados[]>(url);
  }
  buscar(nome: string): Observable<Dados> {
    const url = `${this.apiUrl}/buscar/${nome}`;
    return this.http.get<Dados>(url);
  }
  cadastrar(dados: Dados): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Dados>(url, dados, httpOptions);
  }
  atualizar(dados: Dados): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Dados>(url, dados, httpOptions);
  }
  excluir(nome: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${nome}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
