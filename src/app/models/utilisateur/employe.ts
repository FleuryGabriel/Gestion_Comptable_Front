import { Agence } from './agence';

export class Employe {
    nom:string;
    prenom:string;
    dateNaissance:Date;
    cin:Number;
    email:string;
    tel:Number;
    salaire:Number;
    deleted:Boolean;
    agence:Agence
}
