import { CargoResolverGuard } from './components/guards/cargo-resolver.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioResolverGuard } from './components/guards/funcionario-resolver.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'funcionarios' },

  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./components/funcionarios/funcionarios.module').then(
        (m) => m.FuncionariosModule
      ),
  },

  {
    path: 'cargos',
    loadChildren: () =>
      import('./components/cargos/cargos.module').then(
        (m) => m.CargosModule
      ),
  },

  {
    path: 'funcionarios/cadastrar',
    loadChildren: () =>
      import(
        './components/cadastrar-funcionario/cadastrar-funcionario.module'
      ).then((m) => m.CadastrarFuncionarioModule),
    resolve: {
      funcionario: FuncionarioResolverGuard,
    },
  },

  {
    path: 'cargos/cadastrar',
    loadChildren: () =>
      import(
        './components/cadastrar-cargo/cadastrar-cargo.module'
      ).then((m) => m.CadastrarCargoModule),
      resolve: {
        cargo: CargoResolverGuard,
      },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
