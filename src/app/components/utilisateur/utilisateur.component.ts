import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/utilisateur/employe';
import { Role } from 'src/app/models/utilisateur/role';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { EmployeServiceService } from 'src/app/services/utilisateur/employe-service.service';
import { RoleServiceService } from 'src/app/services/utilisateur/role-service.service';
import { UtilisateurServiceService } from 'src/app/services/utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  constructor(private uService:UtilisateurServiceService, private rService:RoleServiceService, private eService:EmployeServiceService) { }

  utilisateur:Utilisateur = new Utilisateur();
  utilisateurs:Utilisateur[] = new Array();
  employes:Employe[] = new Array();
  roles:Role[] = new Array();

  ajouterIsActive:boolean = false;
  modifierIsActive:boolean = false;

  ngOnInit(): void {

    this.uService.findAll().subscribe(
      data => {this.utilisateurs=data}
    )
    this.eService.findAll().subscribe(
      data => {this.employes=data}
    )
    this.rService.findAll().subscribe(
      data => {this.roles=data}
    )
  }

  ajouter(){

    this.utilisateur.dateCreation = new Date();
    this.utilisateur.deleted = false;
    this.utilisateur.enabled = true;

    this.uService.save(this.utilisateur).subscribe();
    history.go(0);

  }

  modifier(){
    this.uService.save(this.utilisateur).subscribe();
    history.go(0);

  }

  supprimer(id:number){
    this.uService.findOne(id).subscribe(
      data => {this.utilisateur=data}
    )
    this.utilisateur.enabled=false;
    this.uService.deleted(id).subscribe()
    history.go(0);

  }

  supprimerDefinitivement(id:number){
    this.uService.delete(id).subscribe();
    history.go(0);

  }

  activerAjout(){
    if(this.ajouterIsActive){
      this.ajouterIsActive=false;
    }else{
      this.ajouterIsActive=true;
    }
    if(this.modifierIsActive){
      this.modifierIsActive=false;
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
