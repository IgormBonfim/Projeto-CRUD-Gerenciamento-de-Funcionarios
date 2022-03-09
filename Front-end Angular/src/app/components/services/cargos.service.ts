import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service';

import { Cargo } from './../model/Cargo';

@Injectable({
  providedIn: 'root'
})
export class CargosService extends CrudService<Cargo> {

  constructor(protected http: HttpClient) {
    super(http, 'api/cargos');
  }
}
