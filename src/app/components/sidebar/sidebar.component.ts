import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/agences",
    title: "Agence ",
    rtlTitle: "Agence",
    icon: "icon-bank",
    class: ""
  },
  {
    path: "/employes",
    title: "Employe",
    rtlTitle: "Employe",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/roles",
    title: "Role",
    rtlTitle: "Role",
    icon: "icon-vector",
    class: "" },
  {
    path: "/utilisateurs",
    title: "Utilisateur",
    rtlTitle: "Utilisateur",
    icon: "icon-laptop",
    class: ""
  },

  {
    path: "/exercices",
    title: "Exercice",
    rtlTitle: "Exercice",
    icon: "icon-calendar-60",
    class: ""
  },
  {
    path: "/journaux",
    title: "Journal",
    rtlTitle:"Journal",
    icon: "icon-book-bookmark",
    class: ""
  },
  {
    path: "/lignesEcriture",
    title: "Ligne Ecriture",
    rtlTitle: "Ligne Ecriture",
    icon: "icon-align-left-2",
    class: ""
  },
  {
    path: "/compteComptables",
    title: "Compte Comptable",
    rtlTitle: "Compte Comptable",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/devises",
    title: "Devise",
    rtlTitle: "Devise",
    icon: "icon-money-coins",
    class: ""
  }

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
