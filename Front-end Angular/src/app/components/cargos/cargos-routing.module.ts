import { CargoResolverGuard } from './../guards/cargo-resolver.guard';
import { CadastrarCargoComponent } from './../cadastrar-cargo/cadastrar-cargo.component';
import { CargosComponent } from './cargos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CargosComponent },
  { path: 'editar/:id',
    component: CadastrarCargoComponent,
    resolve: {
      cargo: CargoResolverGuard
    }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
