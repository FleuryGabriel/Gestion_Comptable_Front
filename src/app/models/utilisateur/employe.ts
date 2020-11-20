import { Agence } from './agence';

export class Employe {
    nom:String;
    prenom:String;
    dateNaissance:Date;
    cin:Number;
    email:String;
    tel:Number;
    salaire:Number;
    deleted:Boolean;
    agence:Agence
}
