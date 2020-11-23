import { Employe } from './employe';
import { Role } from './role';

export class Utilisateur {
    login:string;
    password:string;
    dateCreation:Date;
    enable:boolean;
    deleted:boolean;
    role:Role;
    employe:Employe
}
