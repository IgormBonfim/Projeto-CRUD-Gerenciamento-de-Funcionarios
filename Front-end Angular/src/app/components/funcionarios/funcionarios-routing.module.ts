import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarFuncionarioComponent } from './../cadastrar-funcionario/cadastrar-funcionario.component';
import { FuncionarioResolverGuard } from './../guards/funcionario-resolver.guard';
import { FuncionariosComponent } from './funcionarios.component';

const routes: Routes = [
  { path: '', component: FuncionariosComponent },
  {
    path: 'editar/:id',
    component: CadastrarFuncionarioComponent,
    resolve: {
      funcionario: FuncionarioResolverGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosRoutingModule {}
