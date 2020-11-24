import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/utilisateur/role';
import { RoleServiceService } from 'src/app/services/utilisateur/role-service.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  role:Role = new Role();
  roles:Role[] = new Array();

  constructor(private rService: RoleServiceService) { }

  ngOnInit(): void {
    this.rService.findAll().subscribe(data => {this.roles=data})
  }

  save():void {
    this.rService.save(this.role).subscribe(arg=> {
      console.log(arg,"save Ok", arg.status);
      this.role=new Role();
      this.findAll();
    });
  }
 findAll():void {
    this.rService.findAll().subscribe((data: Role[])=>{
      this.roles=data;
      console.log(this.role);
    })
  }
  delete(id):void {
    this.rService.delete(id).subscribe(data=>{
      this.findAll();
    })
  }
  selectOne(item):void {
    this.role=item;
    console.log(this.role)
  }
  deleted(id):void{
    this.rService.deleted(id,this.role).subscribe(data=>{
      this.findAll();
    })

  }

}
