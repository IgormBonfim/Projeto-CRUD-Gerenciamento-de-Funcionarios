import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrudService } from '../../shared/crud-service';
import { Funcionario } from '../model/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService extends CrudService<Funcionario> {

  constructor(protected http: HttpClient) {
    super(http, 'api/funcionarios');
  }
}
