import { SucessDialogComponent } from './../cadastrar-funcionario/sucess-dialog/sucess-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CargosService } from './../services/cargos.service';

@Component({
  selector: 'app-cadastrar-cargo',
  templateUrl: './cadastrar-cargo.component.html',
  styleUrls: ['./cadastrar-cargo.component.css']
})
export class CadastrarCargoComponent implements OnInit {

  perms: any[] = ["Consulta", "Elaborador", "Administrador"]

  formCargo: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cargosService: CargosService,
    private location: Location,
    private route: ActivatedRoute,
    private dialog: MatDialog ) {

    this.formCargo = this.formBuilder.group({})

   }

  ngOnInit(): void {

    const cargo = this.route.snapshot.data['cargo']

    this.formCargo = this.formBuilder.group({
      id: [cargo.id],
      nomeCargo: [cargo.nomeCargo, [Validators.required]],
      setor: [cargo.setor, [Validators.required]],
      perm: [cargo.perm, [Validators.required]],
      dtaCargo: [cargo.dtaCargo]
    })
  }

  openDialog(msg: string) {
    this.dialog.open(SucessDialogComponent, {
      data: msg
    });
  }

  onSubmit() {
    if (this.formCargo.valid) {
      if (this.formCargo.value.id != 0) {
        var dtaEscolhida = new Date(this.formCargo.value.dtaCargo);
        this.formCargo.value.dtaCargo = new Date(dtaEscolhida.setDate(dtaEscolhida.getDate()+1));
        this.cargosService.update(this.formCargo.value).subscribe(
          sucess => {
            console.log("Cargo atualizado");
            console.log(this.formCargo.value);
            this.openDialog("Cargo atualizado com sucesso.")
          }
        )
      }else {
        this.cargosService.create(this.formCargo.value).subscribe(
          sucess => {
            console.log("Cargo cadastrado");
            console.log(this.formCargo.value);
            this.openDialog("Cargo cadastrado com sucesso.");
          }
        )
      }
    }
  }

  onCancel() {
    this.formCargo.reset();
    this.location.back();
  }
}
