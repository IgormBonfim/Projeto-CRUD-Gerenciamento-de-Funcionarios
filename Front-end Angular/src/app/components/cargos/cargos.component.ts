import { RemoverCargoComponent } from './remover-cargo/remover-cargo.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Cargo } from '../model/Cargo';
import { CargosService } from './../services/cargos.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  cargos$: Observable<Cargo[]>;
  displayedColumns = ["name", "setor", "perm", "dtaCargo", "actions"];


  constructor(
    private cargosService: CargosService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {

    this.cargos$ = this.cargosService.list()
    .pipe(
      catchError(error => {
        return of([])
      })
    );

   }

   onEdit(id: number) {
    this.router.navigate(["editar", id], { relativeTo: this.route});
  }

   onRefresh() {
    this.cargos$ = this.cargosService.list().pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      })
    )
  }

   openDialogRemove(cargo: Cargo) {
    return this.dialog.open(RemoverCargoComponent, {
      data: cargo
    });
  }

   onRemove(cargo: Cargo) {
    this.openDialogRemove(cargo)
    .afterClosed().subscribe(res => {
      if(res) {
        console.log(cargo.id);
        this.cargosService.remove(cargo.id)
        .subscribe(
          sucess => this.onRefresh()
        );
      }
    });
   }

  ngOnInit(): void {
  }

}
