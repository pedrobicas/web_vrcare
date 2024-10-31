import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // Para a tabela
import { MatButtonModule } from '@angular/material/button'; // Para o botão
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  email: string;
  completedTrainings: number; // Número de treinamentos concluídos
  class: string; // Turma do aluno
  averageGrade: number; // Média de notas
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule // Se você ainda precisa de botões para ações
  ],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[] = [
    { name: 'João Silva', email: 'joao@example.com', completedTrainings: 5, class: 'Turma A', averageGrade: 8.5 },
    { name: 'Maria Oliveira', email: 'maria@example.com', completedTrainings: 3, class: 'Turma B', averageGrade: 7.0 },
    { name: 'Pedro Santos', email: 'pedro@example.com', completedTrainings: 4, class: 'Turma A', averageGrade: 9.2 },
  ];
  
  displayedColumns: string[] = ['name', 'email', 'completedTrainings', 'class', 'averageGrade', 'actions'];

  deleteStudent(student: Student) {
    // Lógica para excluir um aluno
    this.students = this.students.filter(s => s !== student);
  }
}
