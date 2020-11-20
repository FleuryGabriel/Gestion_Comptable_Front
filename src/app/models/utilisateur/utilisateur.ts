import { Employe } from './employe';
import { Role } from './role';

export class Utilisateur {
    login:String;
    password:String;
    dateCreation:Date;
    enable:boolean;
    deleted:boolean;
    userRole:Role;
    employe:Employe
}
