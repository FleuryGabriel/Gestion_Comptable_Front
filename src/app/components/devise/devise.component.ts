import { Component, OnInit } from '@angular/core';
import { Devise } from 'src/app/models/compteComptable/devise';
import { Exchange } from 'src/app/models/compteComptable/exchange';
import { DeviseServiceService } from 'src/app/services/compteComptable/devise-service.service';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.scss']
})
export class DeviseComponent implements OnInit {

  devise:Devise= new Devise();
  devises:Devise[];
  exchange:Exchange;

  constructor(private deviseService:DeviseServiceService) { }

  ngOnInit() {
    this.findAll();
    this.findAllDevise();
  }
  save():void {
    this.deviseService.save(this.devise).subscribe(arg=> {
      console.log(arg,"save Ok", arg.status);
      this.devise=new Devise();
      this.findAll();
    });
  }
 findAll():void {
    this.deviseService.findAll().subscribe((data: Devise[])=>{
      this.devises=data;
      console.log(this.devise);
    })
  }
  delete(id):void {
    this.deviseService.delete(id).subscribe(data=>{
      this.findAll();
    })
  }
  selectOne(item):void {
    this.devise=item;
    console.log(this.devise)
  }
  deleted(id):void{
    this.deviseService.deleted(id,this.devise).subscribe(data=>{
      this.findAll();
    })
  }

  findAllDevise() {
    this.deviseService.deviseDollar().subscribe(data=>{
      this.exchange = data;
      console.log(this.exchange)
    })
  }
}
