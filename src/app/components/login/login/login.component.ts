import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { AuthServiceService } from 'src/app/services/utilisateur/auth-service.service';
import { UtilisateurServiceService } from 'src/app/services/utilisateur/utilisateur-service.service';
import { AccountdisableComponent } from '../message/accountdisable/accountdisable.component';
import { LoginunknownComponent } from '../message/loginunknown/loginunknown.component';
import { MdpfalseComponent } from '../message/mdpfalse/mdpfalse.component';
import { MessageComponent } from '../message/message.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  utilisateur: Utilisateur = new Utilisateur;
  user: Utilisateur = new Utilisateur;


  mapUserTry = new Map();
  usertry: boolean = false;


  constructor(private router: Router, private utilisateurService: UtilisateurServiceService, private dialog: MatDialog) { }

  ngOnInit() {
   }

  testPop() {
    this.dialog.open(AccountdisableComponent);
  }

  authentification() {
    this.utilisateurService.selectUserByLogin(this.login).subscribe((data: Utilisateur) => {
      this.user = data;
        if (this.mapUserTry.has(this.login)) {
          this.mapUserTry.set(this.login, this.mapUserTry.get(this.login) + 1);
          console.log("Try number", this.mapUserTry.get(this.login));
        } else {
          this.mapUserTry.set(this.login, 1);
          console.log("Try number", this.mapUserTry.get(this.login));
        };

        this.utilisateurService.Autentification(this.login, this.password).subscribe((data: Utilisateur) => {
          this.utilisateur = data;

          if (this.utilisateur != null && this.utilisateur.enabled == true) {
            sessionStorage.setItem('utilisateur', this.utilisateur.login);
            sessionStorage.setItem('Role', this.utilisateur.role.nom);
            this.router.navigate(['/dashboard']);
            this.mapUserTry = new Map();
          }
          else if (this.utilisateur != null && this.utilisateur.enabled == false) {
            console.log("pas enabled")
            this.dialog.open(AccountdisableComponent);
          }
          else {
            if (this.mapUserTry.get(this.login) <= 3) {
              console.log("try ok but wrong mdp")
              this.dialog.open(MdpfalseComponent)
            }
            else {
              this.utilisateurService.selectUserByLogin(this.login).subscribe((data: Utilisateur) => {
                this.utilisateur = data;
                this.utilisateur.enabled = false;
                //console.log("Utilisateur Dis + save  ", this.utilisateur);
                this.utilisateurService.save(this.utilisateur).subscribe((data: Utilisateur) => {
                  //console.log("Utilisateur Dis + Methode  ", this.utilisateur);
                  console.log("3x Try disabled user")
                });
              });
              this.dialog.open(MessageComponent);
            }
          }
        });

    },
    //On traite les erreurs ici
    erreur => {
      console.log(erreur);
      this.dialog.open(LoginunknownComponent);

    });
  };

}
