import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageComponent } from '../message.component';

@Component({
  selector: 'app-loginunknown',
  templateUrl: './loginunknown.component.html',
  styleUrls: ['./loginunknown.component.scss']
})
export class LoginunknownComponent {

  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }
  public  closeMe() {
      this.dialogRef.close();
  }
}
