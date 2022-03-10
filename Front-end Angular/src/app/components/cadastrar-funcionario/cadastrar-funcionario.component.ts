import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Cargo } from './../model/Cargo';
import { Funcionario } from './../model/Funcionario';
import { CargosService } from './../services/cargos.service';
import { FuncionariosService } from './../services/funcionarios.service';
import { SucessDialogComponent } from './sucess-dialog/sucess-dialog.component';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  cargos: Cargo[] = [];
  listaFuncionarios: Funcionario[] = [];

  formCadastro: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cargosService: CargosService,
    private service: FuncionariosService,
    private location: Location,
    private route: ActivatedRoute,
    public dialogSucess: MatDialog) {

    this.formCadastro = this.formBuilder.group({})

  }


  ngOnInit(): void {

    const funcionario = this.route.snapshot.data['funcionario'];

    this.formCadastro = this.formBuilder.group({
      id: [funcionario.id],
      name: [funcionario.name, [Validators.minLength(5)]],
      cpf: [funcionario.cpf, Validators.required],
      telefone: [funcionario.telefone, Validators.required],
      cargo: [funcionario.cargo, Validators.required],
      salario: [funcionario.salario, Validators.required],
      dtaFuncionario: [funcionario.dtaFuncionario, Validators.required]
    });

    this.getFuncionarios();
    this.getCargos();
  }

  getFuncionarios() {
    this.service.list().subscribe(Response => {
      this.listaFuncionarios = Response;
    })
  }

  getCargos() {
    this.cargosService.list().subscribe(Response => {
      this.cargos = Response;
    })
  }

  validaCadastro() {
    for (let listaFuncionarios of this.listaFuncionarios) {
      if (listaFuncionarios.name == this.formCadastro.value.name) {
        this.openDialog("Este Nome já está cadastrado no sistema.");
        return false;
      }else if (listaFuncionarios.cpf == this.formCadastro.value.cpf) {
        this.openDialog("Este CPF já está cadastrado no sistema.");
        return false;
      }else if (listaFuncionarios.telefone == this.formCadastro.value.telefone) {
        this.openDialog("Este Telefone já está cadastrado no sistema.");
        return false;
      }
    } return true;
  }

  openDialog(subtmitDialog: string) {
    this.dialogSucess.open(SucessDialogComponent, {
      data: subtmitDialog
    });
  }

  onSubmit() {
    this.formCadastro.value.cpf = this.formCadastro.value.cpf.toString();
    this.formCadastro.value.telefone = this.formCadastro.value.telefone.toString();
    this.formCadastro.value.salario = this.formCadastro.value.salario.toString();
    var dtaEscolhida = new Date(this.formCadastro.value.dtaFuncionario)
    this.formCadastro.value.dtaFuncionario = new Date(dtaEscolhida.setDate(dtaEscolhida.getDate()+1))
    if (this.formCadastro.valid) {
      if (this.formCadastro.value.id != 0) {
        this.service.update(this.formCadastro.value).subscribe(
          sucess => {
            this.openDialog("Funcionário atualizado com sucesso")
            console.log("Funcionario atualizado");
            console.log(this.formCadastro.value);

          }
        )
      } else if (this.validaCadastro()){
        this.service.create(this.formCadastro.value).subscribe(
          sucess => this.openDialog("Funcionário cadastrado com sucesso")
        );
        console.log('Funcionario cadastrado');
        console.log(this.formCadastro.value);

      }
    }
  }

  onCancel() {
    this.formCadastro.reset();
    this.location.back();
  }
}
