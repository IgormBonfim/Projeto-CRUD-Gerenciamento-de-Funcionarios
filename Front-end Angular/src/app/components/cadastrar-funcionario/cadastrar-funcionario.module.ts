import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { SharedModule } from './../../shared/shared.module';
import { CadastrarFuncionarioRoutingModule } from './cadastrar-funcionario-routing.module';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario.component';
import { SucessDialogComponent } from './sucess-dialog/sucess-dialog.component';


@NgModule({
  declarations: [
    CadastrarFuncionarioComponent,
    SucessDialogComponent
  ],
  imports: [
    CommonModule,
    CadastrarFuncionarioRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CadastrarFuncionarioModule { }
