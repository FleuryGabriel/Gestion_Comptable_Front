import { Exercice } from './exercice';
import { Journal } from './journal';

export class LigneEcriture {
    libelle:string;
    virement:number;
    dateEcriture:Date;
    deleted:boolean;
    exercice:Exercice;
    exercices:Exercice[];
    journal:Journal;
    journaux:Journal[];

}
