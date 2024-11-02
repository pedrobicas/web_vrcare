import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; // Para a tabela
import { MatPaginator } from '@angular/material/paginator'; // Para o paginator
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
  avatar: string; // URL do avatar
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginator
  ],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Adicione mais alunos conforme necessário
  students: Student[] = [
    { 
      name: 'Carlos Oliveira', 
      email: 'carlos@example.com', 
      completedTrainings: '3/10', 
      class: 'A', 
      averageGrade: 3.5, 
      priority: 7, 
      progressing: 2, 
      mastering: 1,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Luiza Souza', 
      email: 'luiza@example.com', 
      completedTrainings: '7/10', 
      class: 'A', 
      averageGrade: 6.0, 
      priority: 3, 
      progressing: 5, 
      mastering: 2,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Marina Santos', 
      email: 'marina@example.com', 
      completedTrainings: '10/10', 
      class: 'A', 
      averageGrade: 8.9, 
      priority: 1, 
      progressing: 3, 
      mastering: 6,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=Blazer&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Lucas Mendes', 
      email: 'lucas@example.com', 
      completedTrainings: '5/10', 
      class: 'B', 
      averageGrade: 4.5, 
      priority: 2, 
      progressing: 4, 
      mastering: 3,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMedium&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Ana Clara', 
      email: 'anaclara@example.com', 
      completedTrainings: '8/10', 
      class: 'B', 
      averageGrade: 9.2, 
      priority: 1, 
      progressing: 1, 
      mastering: 7,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Black&facialHairType=BeardMedium&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Pedro Silva', 
      email: 'pedro@example.com', 
      completedTrainings: '6/10', 
      class: 'C', 
      averageGrade: 7.5, 
      priority: 3, 
      progressing: 2, 
      mastering: 5,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Brown&facialHairType=Blank&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Bianca Pereira', 
      email: 'bianca@example.com', 
      completedTrainings: '4/10', 
      class: 'C', 
      averageGrade: 5.8, 
      priority: 4, 
      progressing: 3, 
      mastering: 2,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Round&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Gabriel Lima', 
      email: 'gabriel@example.com', 
      completedTrainings: '9/10', 
      class: 'D', 
      averageGrade: 8.0, 
      priority: 2, 
      progressing: 5, 
      mastering: 3,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Blonde&facialHairType=BeardMedium&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Fernanda Costa', 
      email: 'fernanda@example.com', 
      completedTrainings: '2/10', 
      class: 'D', 
      averageGrade: 3.9, 
      priority: 5, 
      progressing: 1, 
      mastering: 1,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Black&facialHairType=BeardMedium&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    }
  ];

  studentsDataSource = new MatTableDataSource<Student>(this.students); // Corrigido para inicializar corretamente

  displayedColumns: string[] = ['avatar', 'name', 'completedTrainings', 'averageGrade', 'class', 'priority', 'progressing', 'mastering'];

  constructor() {}

  ngAfterViewInit() {
    this.studentsDataSource.paginator = this.paginator; // Associar o paginator ao dataSource
  }

  getPriorityClass(priority: number): string {
    return 'priority';
  }
  getBarColor(averageGrade: number): string {
    if (averageGrade < 5) {
      return 'red-bar'; // Classe para barra vermelha
    } else if (averageGrade >= 5 && averageGrade < 8) {
      return 'yellow-bar'; // Classe para barra amarela
    } else {
      return 'green-bar'; // Classe para barra verde
    }
  }
  
}
