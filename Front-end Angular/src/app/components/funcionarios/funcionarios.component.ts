import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Funcionario } from '../model/Funcionario';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { FuncionariosService } from '../services/funcionarios.service';
import { RemoverComponent } from './remover/remover.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios$: Observable<Funcionario[]>;
  displayedColumns = ["name", "cpf", "telefone", "cargo", "setor", "salario", "dtaFuncionario", "actions"];


  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) {

    this.funcionarios$ = this.funcionariosService.list()
    .pipe(
      catchError(error => {
        this.onError("Erro ao carregar funcionários.")
        return of([])
      })

    );
  }

  onRefresh() {
    this.funcionarios$ = this.funcionariosService.list().pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      })
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  openDialogRemove(funcionario: Funcionario) {
    return this.dialog.open(RemoverComponent, {
      data: funcionario
    });
  }

  onEdit(id: number) {
    this.router.navigate(["editar", id], { relativeTo: this.route});
  }

  onRemove(funcionario: Funcionario) {
    this.openDialogRemove(funcionario)
    .afterClosed().subscribe(res => {
      if(res) {
        console.log(funcionario.id);
        this.funcionariosService.remove(funcionario.id)
        .subscribe(
          sucess => this.onRefresh()
        );
      }
    });
  }

  ngOnInit(): void {
  }

}
