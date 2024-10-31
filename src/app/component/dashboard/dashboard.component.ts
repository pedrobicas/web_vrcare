import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// import { Chart } from 'angular-highcharts';
// import { BaseChartDirective } from 'ng2-charts';
// import { ChartsModule } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  template: `
  <button (click)="add()">Add Point!</button>
  <div [chart]="chart"></div>
`,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BaseChartDirective
  ]
})
export class DashboardComponent {
  public SystemName: string = "MF1";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [130, 90, 120, 64, 114, 80, 120, 80, 120, 80, 120];

  public labelMFL: Array<any> = [
    {
      data: this.lineChartData,
      label: this.SystemName
    }
  ];
  // labels
  public lineChartLabels: Array<any> = ["06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00"];

  // Dashboard dinamico
  // public funcao(){
  //   for(int i =0; i<this.lineChartData.length;i++){
  //     this.lineChartData[i] = random();
  //   }
  // }      

  constructor() { }

  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 0,
        }
      }],
      xAxes: [{


      }],
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        //color: "#2756B3",
        color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },

      },
      deferred: false

    },

  };

  _lineChartColors: Array<any> = [{
    backgroundColor: 'red',
    borderColor: 'red',
    pointBackgroundColor: 'red',
    pointBorderColor: 'red',
    pointHoverBackgroundColor: 'red',
    pointHoverBorderColor: 'red'
  }];



  public ChartType = 'bar';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }


  // chart = new Chart({
  //   chart: {
  //     type: "line"
  //   },
  //   title:{
  //     text: "Pressão arterial durante o dia"
  //   },
  //   xAxis:{
  //     categories: [
  //       "06:00",
  //       "07:00",
  //       "08:00",
  //       "09:00",
  //       "10:00",
  //       "11:00",
  //       "12:00",
  //       "13:00",
  //       "14:00",
  //       "15:00",
  //       "16:00"
  //     ]
  //   },
  //   yAxis: {
  //     title:{
  //       text: "Pressão"
  //     }
  //   },
  //   series:[{
  //     name: "Pressão arterial",
  //     type: "line",
  //     data: [120, 80, 120, 80, 120, 80, 120, 80, 120, 80, 120]
  //   }]
  // })

  // constructor() {}

  // ngOnInit(): void{

  // } 

  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }

  /** Based on the screen size, switch from standard to one column per row */
  private breakpointObserver = inject(BreakpointObserver);
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 2 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
}
