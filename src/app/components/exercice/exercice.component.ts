import { Component, OnInit } from '@angular/core';
import { Exercice } from 'src/app/models/journal/exercice';
import { ExerciceServiceService } from 'src/app/services/journal/exercice-service.service';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent implements OnInit {

  exercice:Exercice = new Exercice();
  exercices:Exercice[] = new Array();
  
  constructor(private eService: ExerciceServiceService) { }

  ngOnInit(): void {
    this.eService.findAll().subscribe(
      data => {this.exercices=data}
    )
  }

  save():void {
    this.eService.save(this.exercice).subscribe(()=> {
      this.exercice=new Exercice();
      this.findAll();
    });
  }
 findAll():void {
    this.eService.findAll().subscribe((data: Exercice[])=>{
      this.exercices=data;
      console.log(this.exercice);
    })
  }
  delete(id):void {
    this.eService.delete(id).subscribe(data=>{
      this.findAll();
    })
  }
  selectOne(item):void {
    this.exercice=item;
    console.log(this.exercice)
  }
  deleted(id):void{
    this.eService.deleted(id,this.exercice).subscribe(data=>{
      this.findAll();
    })

  }

}
