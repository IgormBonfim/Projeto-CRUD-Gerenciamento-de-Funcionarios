import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { SharedModule } from './../../shared/shared.module';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios.component';
import { RemoverComponent } from './remover/remover.component';


@NgModule({
  declarations: [
    FuncionariosComponent,
    RemoverComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class FuncionariosModule { }
