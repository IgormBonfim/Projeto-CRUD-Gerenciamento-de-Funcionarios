import { Funcionario } from './../../model/Funcionario';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.css']
})
export class RemoverComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Funcionario) { }

  onRemoveConfirm() {

  }

  ngOnInit(): void {
  }

}
