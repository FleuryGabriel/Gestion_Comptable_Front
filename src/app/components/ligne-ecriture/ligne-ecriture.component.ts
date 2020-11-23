import { Component, OnInit } from '@angular/core';
import { LigneEcriture } from 'src/app/models/journal/ligne-ecriture';
import { LigneEcritureServiceService } from 'src/app/services/journal/ligne-ecriture-service.service';

@Component({
  selector: 'app-ligne-ecriture',
  templateUrl: './ligne-ecriture.component.html',
  styleUrls: ['./ligne-ecriture.component.scss']
})
export class LigneEcritureComponent implements OnInit {

  ligneEcriture:LigneEcriture = new LigneEcriture();
  ligneEcritures:LigneEcriture[] = new Array();

  constructor(private lService: LigneEcritureServiceService) { }

  ngOnInit(): void {
    this.lService.findAll();
  }

  save():void {
    this.lService.save(this.ligneEcriture).subscribe(arg=> {
      console.log(arg,"save Ok", arg.status);
      this.ligneEcriture=new LigneEcriture();
      this.findAll();
    });
  }
 findAll():void {
    this.lService.findAll().subscribe((data: LigneEcriture[])=>{
      this.ligneEcritures=data;
      console.log(this.ligneEcriture);
    })
  }
  delete(id):void {
    this.lService.delete(id).subscribe(data=>{
      this.findAll();
    })
  }
  selectOne(item):void {
    this.ligneEcriture=item;
    console.log(this.ligneEcriture)
  }
  deleted(id):void{
    this.lService.deleted(id,this.ligneEcriture).subscribe(data=>{
      this.findAll();
    })

  }

}
