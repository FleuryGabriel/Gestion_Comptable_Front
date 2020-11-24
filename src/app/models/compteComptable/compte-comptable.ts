import { Devise } from './devise';

export class CompteComptable {
    code:string;
    nom:string ;
    sens:string;
    devise:Devise=new Devise();
    devises:Devise[];
    deleted:boolean;
}
