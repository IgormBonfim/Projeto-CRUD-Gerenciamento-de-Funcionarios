import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../../shared/app-material/app-material.module';
import { SharedModule } from './../../shared/shared.module';
import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos.component';
import { RemoverCargoComponent } from './remover-cargo/remover-cargo.component';


@NgModule({
  declarations: [
    CargosComponent,
    RemoverCargoComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class CargosModule { }
