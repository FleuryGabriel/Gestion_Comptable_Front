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

  constructor(private uService: UtilisateurServiceService, private rService: RoleServiceService, private eService: EmployeServiceService) { }

  utilisateur: Utilisateur = new Utilisateur();
  utilisateurs: Utilisateur[];
  employes: Employe[];
  roles: Role[];

  ngOnInit(): void {

    this.findAll();
    this.getEmployes();
    this.getRoles();
  }

  findAll(): void {
    this.uService.findAll().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data;
      console.log(this.utilisateurs);
    })
  }

  getRoles() {
    this.rService.findAll().subscribe(
      (data: Role[]) => { this.roles = data }
    )
  }

  getEmployes() {
    this.eService.findAll().subscribe(
      (data: Employe[]) => { this.employes = data;
      console.log(this.employes)
      }
    )
  }

  save() {

    this.utilisateur.dateCreation = new Date();
    this.utilisateur.deleted = false;
    this.utilisateur.enable = true;

    this.uService.save(this.utilisateur).subscribe(
      data => {
        this.findAll();
        this.utilisateur = new Utilisateur();
      }
    );
  }

  delete(id): void {
    this.uService.delete(id).subscribe(data => {
      this.findAll();
      this.utilisateur = new Utilisateur();
    });
  }

  deleted(id): void {
    this.utilisateur.enable = false;
    this.uService.save(this.utilisateur).subscribe();
    this.uService.deleted(id, this.utilisateur).subscribe(
      data => {
        this.findAll();
        this.utilisateur = new Utilisateur();
      }
    );
  }

  selectOne(item): void {
    this.utilisateur = item;
  }


}
