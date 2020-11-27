import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/utilisateur/employe';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { EmployeServiceService } from 'src/app/services/utilisateur/employe-service.service';
import { RoleServiceService } from 'src/app/services/utilisateur/role-service.service';
import { UtilisateurServiceService } from 'src/app/services/utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private uService: UtilisateurServiceService) { }

  utilisateur: Utilisateur = new Utilisateur();
  employe: Employe;
  login:string;


  ngOnInit(): void {

    this.findUser();
  }

  findUser(): void {
    this.uService.selectUserByLogin(sessionStorage.getItem('utilisateur')).subscribe((data: Utilisateur) => {
      this.utilisateur = data;
      console.log(this.utilisateur);
    })
  }

  save() {
    this.uService.save(this.utilisateur).subscribe(
      data => {
        this.utilisateur = data;
        this.findUser();
      }
    );
  }
}
