import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { AuthServiceService } from 'src/app/services/utilisateur/auth-service.service';
import { UtilisateurServiceService } from 'src/app/services/utilisateur/utilisateur-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password :string; 
  utilisateur :Utilisateur=new Utilisateur;

  constructor(private router: Router, private utilisateurService: UtilisateurServiceService) { }

  ngOnInit() { }

  // login() {
  //  console.log('Tentative de connexion');

  // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
  // localStorage.setItem('utilisateur', JSON.stringify({login : this.utilisateur.login, role : this.utilisateur.userRole}));
  // localStorage.setItem('utilisateur', JSON.stringify({role : this.utilisateur.userRole}));
  // this.router.navigate(['dashboard']);
  // }


 authentification(){

      this.utilisateurService.Autentification(this.login, this.password).subscribe((data :Utilisateur)=> {

        this.utilisateur=data;
        console.log("my User**   ", this.utilisateur);   

        if(this.utilisateur)
        {
          localStorage.setItem('utilisateur',this.utilisateur.login);
          localStorage.setItem('Role',this.utilisateur.role.nom);
          this.router.navigate(['/dashboard']);
        }
      })
    }


}
