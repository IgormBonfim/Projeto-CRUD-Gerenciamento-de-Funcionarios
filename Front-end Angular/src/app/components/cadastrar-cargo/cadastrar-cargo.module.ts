import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { CadastrarCargoRoutingModule } from './cadastrar-cargo-routing.module';
import { CadastrarCargoComponent } from './cadastrar-cargo.component';
import { SucessDialogComponent } from './sucess-dialog/sucess-dialog.component';


@NgModule({
  declarations: [
    CadastrarCargoComponent,
    SucessDialogComponent
  ],
  imports: [
    CommonModule,
    CadastrarCargoRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class CadastrarCargoModule { }
