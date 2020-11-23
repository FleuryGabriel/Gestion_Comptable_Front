import { Devise } from './devise';

export class CompteComptable {
    code:String;
    nom:String ;
    sens:String;
    devise:Devise=new Devise();
    devises:Devise[];
    deleted:boolean;
}
