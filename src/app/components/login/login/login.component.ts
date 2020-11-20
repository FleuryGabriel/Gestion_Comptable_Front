import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // utilisateur:Utilisateur 
  utilisateur:any = {
    login:"admin",
    password:"admin"
  };

  constructor(private router: Router) { }

  ngOnInit() { }

  login() {
    console.log('Tentative de connexion');

    // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
   // localStorage.setItem('utilisateur', JSON.stringify({login : this.utilisateur.login}));
   // localStorage.setItem('utilisateur', JSON.stringify({role : this.utilisateur.userRole}));
    this.router.navigate(['dashboard']);
  }

}
