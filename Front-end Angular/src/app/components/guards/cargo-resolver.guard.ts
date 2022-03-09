import { CargosService } from './../services/cargos.service';
import { Cargo } from './../model/Cargo';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoResolverGuard implements Resolve<Cargo> {

  constructor(
    private cargosService: CargosService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cargo | Observable<Cargo> | Promise<Cargo> {
    if(route.params && route.params['id']) {
      return this.cargosService.loadById(route.params['id'])
    }

    return of({
      id:0,
      nomeCargo: '',
      setor: '',
      perm: '',
      dtaCargo: new Date()
    })
  }
}
