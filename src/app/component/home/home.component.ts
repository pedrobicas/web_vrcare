import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import Chart from 'chart.js/auto';

// Registrar a localidade para português do Brasil
registerLocaleData(localePt);

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
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ]
})
  export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('performanceChart') chartCanvas!: ElementRef<HTMLCanvasElement>;

    topStudents: Student[] = [
      { 
        name: 'Samuel Mendes', 
        score: 95, 
        lastActivity: 'Última atividade: 2h atrás', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
        scoreColor: '#2196f3'
      },
      { 
        name: 'Carla Santos', 
        score: 92, 
        lastActivity: 'Última atividade: 3h atrás', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Kurt&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelBlue&eyeType=Happy&eyebrowType=UpDown&mouthType=Smile&skinColor=Light',
        scoreColor: '#4CAF50'
      },
      { 
        name: 'Sofia Marques', 
        score: 88, 
        lastActivity: 'Última atividade: 4h atrás', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Round&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Brown',
        scoreColor: '#ff9800'
      }
    ];


    notifications: Notification[] = [
  { 
    user: 'Daniel Oliveira', 
    message: 'Enviou uma nova atividade para revisão', 
    time: '2h atrás', 
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Sunglasses&hairColor=Black&facialHairType=MoustacheFancy&clotheType=BlazerSweater&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Brown'
  },
  { 
    user: 'Lucas Alves', 
    message: 'Completou o módulo 3 com média 92', 
    time: '3h atrás', 
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Tanned'
  },
  { 
    user: 'Maria Costa', 
    message: 'Comentou em sua última atividade', 
    time: '4h atrás', 
    avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelOrange&eyeType=Happy&eyebrowType=UpDown&mouthType=Smile&skinColor=Light'
  }
];    

todaySchedule: ScheduleEvent[] = [
  {
    time: '08:30',
    title: 'Treinamento VR: Técnica de Sutura',
    duration: '1h',
    color: '#2196f3',
    participants: [
      { 
        name: 'Dr. João Carvalho', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
      },
      { 
        name: 'Maria Souza', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&eyeType=Wink&eyebrowType=Default&mouthType=Smile&skinColor=Brown'
      },
      { 
        name: 'Pedro Alves', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Kurt&hairColor=Brown&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Tanned'
      }
    ]
  },
  {
    time: '10:15',
    title: 'VR: Procedimento de Laparoscopia',
    duration: '1h 30min',
    color: '#FF5722',
    participants: [
      { 
        name: 'Dra. Laura Martins', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Tanned'
      },
      { 
        name: 'Rafael Costa', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Brown&facialHairType=MoustacheFancy&clotheType=ShirtCrewNeck&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light'
      },
      { 
        name: 'Isabela Nunes', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
      }
    ]
  },
  {
    time: '13:00',
    title: 'Sessão de VR: Transplante de Fígado',
    duration: '2h',
    color: '#4CAF50',
    participants: [
      { 
        name: 'Dr. Marcos Oliveira', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Black&facialHairType=BeardMajestic&clotheType=Overall&eyeType=Squint&eyebrowType=Default&mouthType=Smile&skinColor=Brown'
      },
      { 
        name: 'Ana Silva', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=GraphicShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light'
      },
      { 
        name: 'Carlos Pereira', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Brown&facialHairType=MoustacheFancy&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Tanned'
      }
    ]
  },
  {
    time: '15:30',
    title: 'Simulação VR: Ressecção de Tumor Cerebral',
    duration: '1h 45min',
    color: '#FFC107',
    participants: [
      { 
        name: 'Dra. Fernanda Lopes', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
      },
      { 
        name: 'Tiago Mendes', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtCrewNeck&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=DarkBrown'
      },
      { 
        name: 'Juliana Santos', 
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Brown'
      }
    ]
  }
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
