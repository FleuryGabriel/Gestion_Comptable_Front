import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { CompteComptableComponent } from 'src/app/components/compte-comptable/compte-comptable.component';
import { AgenceComponent } from 'src/app/components/agence/agence.component';
import { RoleComponent } from 'src/app/components/role/role.component';
import { UtilisateurComponent } from 'src/app/components/utilisateur/utilisateur.component';
import { ExerciceComponent } from 'src/app/components/exercice/exercice.component';
import { JournalComponent } from 'src/app/components/journal/journal.component';
import { LigneEcritureComponent } from 'src/app/components/ligne-ecriture/ligne-ecriture.component';
import { DeviseComponent } from 'src/app/components/devise/devise.component';
import { EmployeComponent } from 'src/app/components/employe/employe.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  {path: "dashboard", component: DashboardComponent },
  {path: "agences", component: AgenceComponent },
  {path: "employes", component: EmployeComponent },
  {path:"roles",component:RoleComponent},
  {path:"utilisateurs",component:UtilisateurComponent},
  {path: "exercices",component:ExerciceComponent},
  {path: "journaux",component:JournalComponent},
  {path: "ligneEcritures",component:LigneEcritureComponent},
  {path: "compteComptables", component: CompteComptableComponent },
  {path: "devises", component: DeviseComponent },

  // { path: "icons", component: IconsComponent },
  // { path: "notifications", component: NotificationsComponent },
  // { path: "user", component: UserComponent },
  // { path: "tables", component: TablesComponent },
  // { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
