import { Funcionario } from './../model/Funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API = "api/funcionarios"

  constructor(private httpClient: HttpClient) {}


  list() {
    return this.httpClient.get<Funcionario[]>(this.API)
    .pipe(
      first(),
      delay(0),
      tap(funcionarios => console.log(funcionarios))
    );
  }

  loadById(id: number) {
    return this.httpClient.get<Funcionario>(`${this.API}/${id}`).pipe(take(1));
  }

  create(funcionario: Funcionario) {
    funcionario.cpf = funcionario.cpf.toString();
    funcionario.telefone = funcionario.telefone.toString();
    funcionario.salario = funcionario.salario.toString();
    var dtaEscolhida = new Date(funcionario.dtaFuncionario)
    funcionario.dtaFuncionario = new Date(dtaEscolhida.setDate(dtaEscolhida.getDate()+1))
    return this.httpClient.post(this.API, funcionario).pipe(take(1));
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }

  update(funcionario: Funcionario) {
    var dtaEscolhida = new Date(funcionario.dtaFuncionario)
    funcionario.dtaFuncionario = new Date(dtaEscolhida.setDate(dtaEscolhida.getDate()+1))
    return this.httpClient.put(`${this.API}/${funcionario.id}`, funcionario).pipe(take(1));
  }
}
