import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  transactionId: number;
}

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    console.log(data.transactionId);
  }

  ngOnInit(): void {
  }

}
