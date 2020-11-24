import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageComponent } from '../message.component';

@Component({
  selector: 'app-mdpfalse',
  templateUrl: './mdpfalse.component.html',
  styleUrls: ['./mdpfalse.component.scss']
})
export class MdpfalseComponent {

  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }
  public  closeMe() {
      this.dialogRef.close();
  }

}
