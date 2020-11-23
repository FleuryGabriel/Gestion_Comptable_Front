import { Component, OnInit } from '@angular/core';
import { CompteComptable } from 'src/app/models/compteComptable/compte-comptable';
import { Devise } from 'src/app/models/compteComptable/devise';
import { CompteComptableServiceService } from 'src/app/services/compteComptable/compte-comptable-service.service';
import { DeviseServiceService } from 'src/app/services/compteComptable/devise-service.service';

@Component({
  selector: 'app-compte-comptable',
  templateUrl: './compte-comptable.component.html',
  styleUrls: ['./compte-comptable.component.scss']
})
export class CompteComptableComponent implements OnInit {

  compteComptable:CompteComptable= new CompteComptable();
  compteComptables:CompteComptable[];
  devise:Devise=new Devise();
  devises:Devise[];

  constructor(private compteComptableService:CompteComptableServiceService,private deviseService:DeviseServiceService) { }

  ngOnInit() {
    this.findAll();
    this.getDevise();

  }

  getDevise():void{
  this.deviseService.findAll().subscribe((data:Devise[])=>{
    this.devises=data;
    console.log(this.devises)
  })

  }


  save():void {
    this.compteComptableService.save(this.compteComptable).subscribe(arg=> {
      console.log(arg,"save Ok", arg.status);
      this.compteComptable=new CompteComptable();
      this.findAll();
    });
  }
 findAll():void {
    this.compteComptableService.findAll().subscribe((data: CompteComptable[])=>{
      this.compteComptables=data;
      console.log(this.compteComptables);
    })
  }
  delete(id):void {
    this.compteComptableService.delete(id).subscribe(data=>{
      this.findAll();
    })
  }
  selectOne(item):void {
    this.compteComptable=item;
    console.log(this.compteComptable)
  }
  deleted(id):void{
    this.compteComptableService.deleted(id,this.compteComptable).subscribe(data=>{
      this.findAll();
    })

  }
}
