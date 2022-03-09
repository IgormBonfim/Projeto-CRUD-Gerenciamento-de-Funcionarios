import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Cargo } from './../../model/Cargo';

@Component({
  selector: 'app-remover-cargo',
  templateUrl: './remover-cargo.component.html',
  styleUrls: ['./remover-cargo.component.css']
})
export class RemoverCargoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Cargo) { }

  ngOnInit(): void {
  }

}
