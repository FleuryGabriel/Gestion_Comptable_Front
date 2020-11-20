import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/utilisateur/employe';
import { EmployeServiceService } from 'src/app/services/utilisateur/employe-service.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {

  employe:Employe = new Employe();
  employes:Employe[] = new Array();

  ajouterIsActive:boolean = false;
  modifierIsActive:boolean = false;

  constructor(private eService:EmployeServiceService) { }

  ngOnInit(): void {

    this.eService.findAll().subscribe(
      data => {this.employes=data}
    )

  }

  ajouter(){
    this.eService.save(this.employe).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    );
  }

  modifier(){
    this.eService.save(this.employe).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    );
  }

  supprimer(id:number){
    this.eService.delete(id).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    )
  }

  supprimerDefinitivement(id:number, emp:Employe){
    this.eService.deleted(id,emp).subscribe(
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

    this.eService.findOne(id).subscribe(
      data => {
        this.employe=data;
      }
    )

  }

}
