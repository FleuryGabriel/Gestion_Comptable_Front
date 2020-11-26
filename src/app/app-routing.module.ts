import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthGuard } from './service/auth/auth.guard';
import { CompteComptableComponent } from './components/compte-comptable/compte-comptable.component';
import { DeviseComponent } from './components/devise/devise.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { EmployeComponent } from './components/employe/employe.component';
import { AgenceComponent } from './components/agence/agence.component';
import { RoleComponent } from './components/role/role.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { LigneEcritureComponent } from './components/ligne-ecriture/ligne-ecriture.component';
import { JournalComponent } from './components/journal/journal.component';
import { IconsComponent } from './pages/icons/icons.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [

  {path: 'login',component: LoginComponent},
  {path: 'dashboard', redirectTo: "dashboard", pathMatch: "full"},
  {path: '', redirectTo:'login', pathMatch:"full"},
  {path: '',
    canActivate: [AuthGuard],
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: 'compteComptables',
    component: CompteComptableComponent
  },
  {
    path: 'devises',
    component: DeviseComponent
  },

  {path:'icons', component:IconsComponent},

  {path:'utilisateurs', component:UtilisateurComponent},
  {path:'employes', component:EmployeComponent},
  {path:'agences', component:AgenceComponent},
  {path:'roles', component:RoleComponent},
  {path:'exercices', component:ExerciceComponent},
  {path:'lignesEcritures', component:LigneEcritureComponent},
  {path:'journaux', component:JournalComponent},
  {path:'calendar', component:CalendarComponent},
  {path:'ligneEcritures', component:LigneEcritureComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
