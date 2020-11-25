import { Component, OnInit } from '@angular/core';
import { Journal } from 'src/app/models/journal/journal';
import { JournalServiceService } from 'src/app/services/journal/journal-service.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  journal:Journal = new Journal();
  journaux:Journal[];


  constructor(private jService:JournalServiceService) { }

  ngOnInit(): void {

    this.findAll();
  }

  save():void {
    this.jService.save(this.journal).subscribe(arg=> {
      console.log(arg,"save Ok", arg.status);
      this.journal=new Journal();
      this.findAll();
    });
  }

  findAll():void {
    this.jService.findAll().subscribe((data: Journal[])=>{
      this.journaux=data;
      console.log(this.journaux);
    })
  }

  modifier(){
    this.jService.save(this.journal).subscribe(
      response => {
        if(response.status==200){
          history.go(0);
        }
      }
    );
  }

  delete(id):void {
    this.jService.delete(id).subscribe(data=>{
      this.findAll();
    })
  }
  selectOne(item):void {
    this.journal=item;
    console.log(this.journal)
  }
  deleted(id):void{
    this.jService.deleted(id,this.journal).subscribe(data=>{
      this.findAll();
    })

  }



}
