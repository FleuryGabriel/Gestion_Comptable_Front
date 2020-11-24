import { Employe } from './employe';
import { Role } from './role';

export class Utilisateur {
    id:any;
    login:string;
    password:string;
    dateCreation:Date;
    enabled:boolean;
    deleted:boolean;
    role:Role;
    employe:Employe
}
