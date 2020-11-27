import { DatePipe, getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { LigneEcriture } from 'src/app/models/journal/ligne-ecriture';
import { LigneEcritureServiceService } from 'src/app/services/journal/ligne-ecriture-service.service';
import { __values } from 'tslib';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  ligneEcriture:LigneEcriture = new LigneEcriture();
  ligneEcritures:LigneEcriture[] = new Array();
  debits=new Array();
  months=new Array();
  public jan:number;
  public fev:number;
  public mars:number;
  public avr:number;
  public mai:number;
  public juin:number;
  public juil:number;
  public aout:number;
  public sep:number;
  public oct:number;
  public nov:number;
  public dec:number;
  public debits1=new Array();
  public debits2=new Array();
  public debits3=new Array();
  public debits4=new Array();
  public debits5=new Array();
  public debits6=new Array();
  public debits7=new Array();
  public debits8=new Array();
  public debits9=new Array();
  public debits10=new Array();
  public debits11=new Array();
  public debits12=new Array();

  public debit=0;
  public Allmonths=new Array();
  constructor(private ligneEcritureService:LigneEcritureServiceService) {}

  ngOnInit() {
  
    this.DataGraph();
    
  }



Methodegraph(){
  console.log("Second step");
    var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    this.canvas = document.getElementById("chartLineRed");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [80, 100, 70, 80, 120, 80],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });


    this.canvas = document.getElementById("chartLineGreen");
    this.ctx = this.canvas.getContext("2d");


    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
      datasets: [{
        label: "My First dataset",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [90, 27, 60, 12, 80],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });



    var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


    // this.datasets = [
    //    [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
    //   [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
    //   [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
    // ];
    // this.data = this.datasets[1];
    
    this.data=this.Allmonths
    console.log(this.Allmonths.length)
    console.log("tables: ->"+this.Allmonths)
    // console.log(this.data)

    this.canvas = document.getElementById("chartBig1");
    this.ctx = this.canvas.getContext("2d");

  
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    // gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    // gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');

    // gradientStroke.addColorStop(1, 'rgba(233,32,16,0)'); //red colors
    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.5)');
    gradientStroke.addColorStop(0.7, 'rgba(0,0,0,0.5)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0.5)'); //blue colors

    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#1f8ef1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipRed
    };
    this.myChartData = new Chart(this.ctx, config);


    this.canvas = document.getElementById("CountryChart");
    this.ctx  = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var myChart = new Chart(this.ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
        datasets: [{
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [53, 20, 10, 80, 100, 45],
        }]
      },
      options: gradientBarChartConfiguration
    });

    
  
  }


  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }


  DataGraph():void {
    this.ligneEcritureService.findAll().subscribe((data: LigneEcriture[])=>{
      this.ligneEcritures=data;
     
        for(let i=0;i<this.ligneEcritures.length;i++){
        
        var debit=this.ligneEcritures[i].virement;
        var slices=this.ligneEcritures[i].dateEcriture;
       
        var date=new Date(slices);
        var dtm=date.getMonth()+1;
              
        if(dtm==1){
          this.debits1.push(debit);
          this.jan=this.debits1.reduce((a,b)=>a+b);
        }  

        else if(dtm==2){
          this.debits2.push(debit);
          this.fev=this.debits2.reduce((a,b)=>a+b);
        }  
        else if(dtm==3){
          this.debits3.push(debit);
          this.mars=this.debits3.reduce((a,b)=>a+b);
        }  
       else if(dtm==4){
          this.debits4.push(debit);
          this.avr=this.debits4.reduce((a,b)=>a+b);
        }  
       else if(dtm==5){
          this.debits5.push(debit);
          this.mai=this.debits5.reduce((a,b)=>a+b);
        }  
        else if(dtm==6){
          this.debits6.push(debit);
          this.juin=this.debits6.reduce((a,b)=>a+b);
        }  
        else if(dtm==7){
          this.debits7.push(debit);
          this.juil=this.debits7.reduce((a,b)=>a+b);
        }  
        else if(dtm==8){
          this.debits8.push(debit);
          this.aout=this.debits8.reduce((a,b)=>a+b);
        }  
        else if(dtm==9){
          this.debits9.push(debit);
          this.sep=this.debits9.reduce((a,b)=>a+b);
        }  
        else if(dtm==10){
          this.debits10.push(debit);
          this.oct=this.debits10.reduce((a,b)=>a+b);
        }  
        else if(dtm==11){
          this.debits11.push(debit);
          this.nov=this.debits11.reduce((a,b)=>a+b);
                  
         }
         else if(dtm==12){
          this.debits12.push(debit);
          this.dec=this.debits12.reduce((a,b)=>a+b);
                   
         }
         
        
        }
          
        this.Allmonths.push(this.jan);
        this.Allmonths.push(this.fev);
        this.Allmonths.push(this.mars);
        this.Allmonths.push(this.avr);
        this.Allmonths.push(this.mai);
        this.Allmonths.push(this.juin);
        this.Allmonths.push(this.juil);
        this.Allmonths.push(this.aout);
        this.Allmonths.push(this.sep);
        this.Allmonths.push(this.oct);
        this.Allmonths.push(this.nov);
        this.Allmonths.push(this.dec);
        
        
        
        this.Methodegraph();
    })

   

    
  }

}
