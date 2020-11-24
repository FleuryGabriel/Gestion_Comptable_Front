import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageComponent } from '../message.component';

@Component({
  selector: 'app-accountdisable',
  templateUrl: './accountdisable.component.html',
  styleUrls: ['./accountdisable.component.scss']
})
export class AccountdisableComponent {

  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }
  public  closeMe() {
      this.dialogRef.close();
  }

}
