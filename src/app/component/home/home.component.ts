import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import Chart from 'chart.js/auto';

interface Student {
  name: string;
  score: number;
  lastActivity: string;
  avatar: string;
  scoreColor: string;
}

interface Notification {
  user: string;
  message: string;
  time: string;
  avatar: string;
}

interface ScheduleEvent {
  time: string;
  title: string;
  duration: string;
  color: string;
  participants: {
    name: string;
    avatar: string;
  }[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('performanceChart') chartCanvas!: ElementRef<HTMLCanvasElement>;

  topStudents: Student[] = [
    { 
      name: 'Samuel Mendes', 
      score: 95, 
      lastActivity: 'Última atividade: 2h atrás', 
      avatar: 'assets/avatar1.jpg',
      scoreColor: '#2196f3'
    },
    { 
      name: 'Carla Santos', 
      score: 92, 
      lastActivity: 'Última atividade: 3h atrás', 
      avatar: 'assets/avatar2.jpg',
      scoreColor: '#4CAF50'
    },
    { 
      name: 'Sofia Marques', 
      score: 88, 
      lastActivity: 'Última atividade: 4h atrás', 
      avatar: 'assets/avatar3.jpg',
      scoreColor: '#ff9800'
    },
  ];

  notifications: Notification[] = [
    { 
      user: 'Daniel Oliveira', 
      message: 'Enviou uma nova atividade para revisão', 
      time: '2h atrás', 
      avatar: 'assets/avatar4.jpg' 
    },
    { 
      user: 'Lucas Alves', 
      message: 'Completou o módulo 3 com média 92', 
      time: '3h atrás', 
      avatar: 'assets/avatar5.jpg' 
    },
    { 
      user: 'Maria Costa', 
      message: 'Comentou em sua última atividade', 
      time: '4h atrás', 
      avatar: 'assets/avatar6.jpg' 
    }
  ];

  todaySchedule: ScheduleEvent[] = [
    {
      time: '09:00',
      title: 'Aula de VR',
      duration: '1h 30min',
      color: '#2196f3',
      participants: [
        { name: 'João Silva', avatar: 'assets/avatar7.jpg' },
        { name: 'Maria Costa', avatar: 'assets/avatar6.jpg' },
        { name: 'Pedro Santos', avatar: 'assets/avatar8.jpg' }
      ]
    },
    {
      time: '12:00',
      title: 'Aula de VR',
      duration: '1h 30min',
      color: '#2196f3',
      participants: [
        { name: 'João Silva', avatar: 'assets/avatar7.jpg' },
        { name: 'Maria Costa', avatar: 'assets/avatar6.jpg' },
        { name: 'Pedro Santos', avatar: 'assets/avatar8.jpg' }
      ]
    },
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.setupChart();
  }

  private setupChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      // Gradientes de cor para as turmas
      const gradientFillA = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFillA.addColorStop(0, 'rgba(33, 150, 243, 0.2)');
      gradientFillA.addColorStop(1, 'rgba(33, 150, 243, 0)');

      const gradientFillB = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFillB.addColorStop(0, 'rgba(76, 175, 80, 0.2)');
      gradientFillB.addColorStop(1, 'rgba(76, 175, 80, 0)');

      const gradientFillC = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFillC.addColorStop(0, 'rgba(255, 87, 34, 0.2)');
      gradientFillC.addColorStop(1, 'rgba(255, 87, 34, 0)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
          datasets: [
            {
              label: 'Turma A',
              data: [75, 82, 85, 90, 85, 88, 92, 88, 90, 85],
              borderColor: '#2196f3',
              backgroundColor: gradientFillA,
              tension: 0.4,
              fill: true,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: '#2196f3',
              pointHoverBackgroundColor: '#1E88E5',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointHoverRadius: 6
            },
            {
              label: 'Turma B',
              data: [70, 78, 80, 85, 80, 83, 87, 83, 85, 80],
              borderColor: '#4CAF50',
              backgroundColor: gradientFillB,
              tension: 0.4,
              fill: true,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: '#4CAF50',
              pointHoverBackgroundColor: '#43A047',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointHoverRadius: 6
            },
            {
              label: 'Turma C',
              data: [68, 75, 78, 82, 78, 81, 85, 81, 83, 78],
              borderColor: '#FF5722',
              backgroundColor: gradientFillC,
              tension: 0.4,
              fill: true,
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: '#FF5722',
              pointHoverBackgroundColor: '#E64A19',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointHoverRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 14
                },
                color: '#333'
              }
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(0,0,0,0.7)',
              titleFont: {
                size: 14,
                weight: 'bold'
              },
              bodyFont: {
                size: 12
              },
              borderColor: '#eee',
              borderWidth: 1
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#666',
                font: {
                  size: 13
                }
              },
              grid: {
                display: false
              }
            },
            y: {
              max: 100,
              ticks: {
                color: '#666',
                font: {
                  size: 13
                },
                stepSize: 10
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
                lineWidth: 1
              }
            }
          }
        }
      });
    }
  }



}
