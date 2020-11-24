import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/utilisateur/employe';
import { EmployeServiceService } from 'src/app/services/utilisateur/employe-service.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {

  employe:Employe = new Employe();
  employes:Employe[] = new Array();

  constructor(private eService:EmployeServiceService) { }

  ngOnInit(): void {

    this.findAll();

  }


  findAll(): void {
    this.eService.findAll().subscribe((data: Employe[]) => {
      this.employes = data;
    })
  }

  save(){
    this.eService.save(this.employe).subscribe(
      data => {
        this.findAll();
        this.employe = new Employe();
      }
    );
  }

  selectOne(item): void {
    this.employe = item;
  }


    delete(id): void {
    this.eService.delete(id).subscribe(data => {
      this.findAll();
      this.employe = new Employe();
    });
  }

  deleted(id): void {
    this.eService.deleted(id, this.employe).subscribe(
      data => {
        this.findAll();
        this.employe = new Employe();
      }
    );
  }


}
