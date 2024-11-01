import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // Para a tabela
import { CommonModule } from '@angular/common'; // Para pipes

interface Student {
  name: string;
  email: string;
  completedTrainings: string; // Treinamentos, ex: "3/10"
  class: string; // Turma do aluno
  averageGrade: number; // Média de notas
  priority: number; // Número de tarefas prioritárias
  progressing: number; // Número de tarefas em progresso
  mastering: number; // Número de tarefas dominadas
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule
  ],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[] = [
    { name: 'Carlos Oliveira', email: 'carlos@example.com', completedTrainings: '3/10', class: 'A', averageGrade: 3.5, priority: 7, progressing: 2, mastering: 1 },
    { name: 'Luiza Souza', email: 'luiza@example.com', completedTrainings: '7/10', class: 'A', averageGrade: 6.0, priority: 3, progressing: 5, mastering: 2 },
    { name: 'Marina Santos', email: 'marina@example.com', completedTrainings: '10/10', class: 'A', averageGrade: 8.9, priority: 1, progressing: 3, mastering: 6 },
    // Adicione mais alunos conforme necessário
  ];

  displayedColumns: string[] = ['name', 'completedTrainings', 'averageGrade', 'class', 'priority', 'progressing', 'mastering'];

  getPriorityClass(priority: number): string {
    return 'priority';
  }
  
}
