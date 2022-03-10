import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sucess-dialog',
  templateUrl: './sucess-dialog.component.html',
  styleUrls: ['./sucess-dialog.component.css']
})
export class SucessDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              private location: Location) {

  }

  ngOnInit(): void {
  }

  close() {
    this.location.back();
  }

}
