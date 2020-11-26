import { Component, OnInit } from '@angular/core';
import { Exercice } from 'src/app/models/journal/exercice';
import { Journal } from 'src/app/models/journal/journal';
import { LigneEcriture } from 'src/app/models/journal/ligne-ecriture';
import { ExerciceServiceService } from 'src/app/services/journal/exercice-service.service';
import { JournalServiceService } from 'src/app/services/journal/journal-service.service';
import { LigneEcritureServiceService } from 'src/app/services/journal/ligne-ecriture-service.service';


@Component({
  selector: 'app-ligne-ecriture',
  templateUrl: './ligne-ecriture.component.html',
  styleUrls: ['./ligne-ecriture.component.scss']
})
export class LigneEcritureComponent implements OnInit {

  ligneEcriture:LigneEcriture = new LigneEcriture();
  ligneEcritures:LigneEcriture[] = new Array();
  journal:Journal=new Journal();
  journaux:Journal[]=new Array();
  exercice:Exercice=new Exercice();
  exercices:Exercice[]=new Array();

  constructor(private lService: LigneEcritureServiceService,private exerciceService:ExerciceServiceService,private journalService:JournalServiceService) { }

  ngOnInit() {
    this.findAll();
    this.getExercice();
    this.getJournal();
  }

  getExercice():void{
    this.exerciceService.findAll().subscribe((data:Exercice[])=>{
      this.exercices=data;
      console.log(this.exercices)
    })}

    getJournal():void{
      this.journalService.findAll().subscribe((data:Journal[])=>{
        this.journaux=data;
        console.log(this.journaux)
      })}
  
  save():void {
    this.lService.save(this.ligneEcriture).subscribe(arg=> {
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
