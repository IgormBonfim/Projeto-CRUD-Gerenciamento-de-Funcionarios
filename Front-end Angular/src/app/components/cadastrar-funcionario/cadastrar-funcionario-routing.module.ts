import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario.component';

const routes: Routes = [{ path: '', component: CadastrarFuncionarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrarFuncionarioRoutingModule { }
