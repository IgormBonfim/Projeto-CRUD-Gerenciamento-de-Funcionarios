import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Funcionario } from './../model/Funcionario';
import { FuncionariosService } from './../services/funcionarios.service';



@Injectable({
  providedIn: 'root'
})
export class FuncionarioResolverGuard implements Resolve<Funcionario> {

  constructor(private service: FuncionariosService) {}



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Funcionario | Observable<Funcionario> | Promise<Funcionario> {
    if(route.params && route.params['id']) {
      return this.service.loadById(route.params['id'])
    }

    return of({
      id: 0,
      name: '',
      cpf: '',
      telefone: '',
      cargo: 0,
      salario: '',
      dtaFuncionario: new Date()
    });
  }

}
