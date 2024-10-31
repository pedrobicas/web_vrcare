import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule, MatCalendar } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BaseChartDirective } from 'ng2-charts';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCalendar,
    BaseChartDirective,
    MatListModule,
    CommonModule
  ]
})
export class HomeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  // Dados de desempenho dos alunos
  public studentPerformanceData = [
    { data: [85, 90, 78, 88, 80, 85, 90, 92, 95, 88, 87, 90], label: 'Turma A' },
    { data: [80, 87, 92, 75, 85, 88, 90, 92, 94, 85, 83, 88], label: 'Turma B' },
    { data: [75, 80, 85, 90, 82, 84, 86, 88, 89, 87, 86, 85], label: 'Turma C' },
    { data: [88, 84, 90, 92, 91, 89, 88, 87, 86, 88, 90, 92], label: 'Turma D' }
  ];

  // Atualização feita aqui para incluir todos os meses
  public performanceLabels = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", 
    "Junho", "Julho", "Agosto", "Setembro", "Outubro", 
    "Novembro", "Dezembro"
  ];

  // Opções do gráfico
  public chartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{ ticks: { max: 100, min: 0 } }],
    }
  };
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  // Dados para o calendário e programação
  public selectedDate: Date | null = null;
  public trainingSessions = [
    "Treinamento em Laparoscopia:  10:00 - 12:00",
    "Alice - Sessão acompanhada:  13:00 - 14:30",
    "Mariana - Sessão acompanhada:  15:00 - 16:30",
  ];

  // Notificações de estudantes
  public notifications = [
    "Alice: Pergunta sobre o treinamento de amanhã.",
    "Lucas: Solicitação de revisão da aula passada.",
    "Mariana: Dúvida sobre a atividade prática."
  ];

  // Dados dos melhores alunos
  public topStudents = [
    { name: "Alice", average: 90, completedTraining: 7, totalTraining: 10 },
    { name: "Lucas", average: 85, completedTraining: 9, totalTraining: 10 },
    { name: "Mariana", average: 88, completedTraining: 8, totalTraining: 10 },
    { name: "Pedro", average: 92, completedTraining: 10, totalTraining: 10 }
  ];

  constructor() { }

  public chartClicked(e: any): void { console.log(e); }
  public chartHovered(e: any): void { console.log(e); }
}
