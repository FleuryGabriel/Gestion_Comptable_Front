import { Component, OnInit } from '@angular/core';
import { Journal } from 'src/app/models/journal/journal';
import { JournalServiceService } from 'src/app/services/journal/journal-service.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  constructor(private jService:JournalServiceService) { }

  journal:Journal = new Journal();
  journaux:Journal[] = new Array();

  ajouterIsActive:boolean = false;
  modifierIsActive:boolean = false;

  ngOnInit(): void {

    this.jService.findAll().subscribe(
      data => {this.journaux=data}
    )

  }

  ajouter(){
    this.jService.save(this.journal).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    );
  }

  modifier(){
    this.jService.save(this.journal).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    );
  }

  supprimer(id:number){
    this.jService.delete(id).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    )
  }

  supprimerDefinitivement(id:number, journal:Journal){
    this.jService.deleted(id,journal).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    )
  }

  activerAjout(){
    if(this.ajouterIsActive){
      this.ajouterIsActive=false;
    }else{
      this.ajouterIsActive=true;
    }
  }

  activerModif(id:number){
    if(this.modifierIsActive){
      this.modifierIsActive=false;
    }else{
      this.modifierIsActive=true;
    }
  }

}
