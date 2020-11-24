import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LoginComponent } from './login/login/login.component';
import { EmployeComponent } from './employe/employe.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AgenceComponent } from './agence/agence.component';
import { RoleComponent } from './role/role.component';
import { CompteComptableComponent } from './compte-comptable/compte-comptable.component';
import { DeviseComponent } from './devise/devise.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { JournalComponent } from './journal/journal.component';
import { LigneEcritureComponent } from './ligne-ecriture/ligne-ecriture.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './login/message/message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MdpfalseComponent } from './login/message/mdpfalse/mdpfalse.component';
import { AccountdisableComponent } from './login/message/accountdisable/accountdisable.component';
import { LoginunknownComponent } from './login/message/loginunknown/loginunknown.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule,FormsModule, MatDialogModule,MatInputModule,MatButtonModule,MatCardModule,MatFormFieldModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, LoginComponent, EmployeComponent, UtilisateurComponent, AgenceComponent, RoleComponent, CompteComptableComponent, DeviseComponent, ExerciceComponent, JournalComponent, LigneEcritureComponent, MessageComponent, MdpfalseComponent, AccountdisableComponent, LoginunknownComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent]
})
export class ComponentsModule {}
