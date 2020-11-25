import { Component, OnInit } from '@angular/core';
import { Agence } from 'src/app/models/utilisateur/agence';
import { AgenceServiceService } from 'src/app/services/utilisateur/agence-service.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {

  agence:Agence= new Agence();
  agences:Agence[];
  logadm:boolean;

  constructor(private agenceService:AgenceServiceService) { }

  ngOnInit() {
    this.findAll();
    if(sessionStorage.getItem('Role')=="admin") {
      this.logadm = true;};
  }
  save():void {
    this.agenceService.save(this.agence).subscribe(arg=> {
      console.log(arg,"save Ok", arg.status);
      this.agence=new Agence();
      this.findAll();
    });
  }
 findAll():void {
    this.agenceService.findAll().subscribe((data: Agence[])=>{
      this.agences=data;
      console.log(this.agence);
    })
  }
  delete(id):void {
    this.agenceService.delete(id).subscribe(data=>{
      this.findAll();
    })
  }
  selectOne(item):void {
    this.agence=item;
    console.log(this.agence)
  }
  deleted(id):void{
    this.agenceService.deleted(id,this.agence).subscribe(data=>{
      this.findAll();
    })

  }
}
