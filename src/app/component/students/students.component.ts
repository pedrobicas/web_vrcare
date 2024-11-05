import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

interface Student {
  name: string;
  email: string;
  completedTrainings: string;
  class: string;
  averageGrade: number;
  priority: number;
  progressing: number;
  mastering: number;
  avatar: string;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Pedro Almeida', 
      email: 'pedro@example.com', 
      completedTrainings: '5/10', 
      class: 'B', 
      averageGrade: 4.2, 
      priority: 6, 
      progressing: 3, 
      mastering: 2,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShort&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=Blank&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Ana Lima', 
      email: 'ana@example.com', 
      completedTrainings: '8/10', 
      class: 'B', 
      averageGrade: 9.5, 
      priority: 2, 
      progressing: 6, 
      mastering: 4,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Lucas Ferreira', 
      email: 'lucas@example.com', 
      completedTrainings: '6/10', 
      class: 'C', 
      averageGrade: 5.0, 
      priority: 4, 
      progressing: 4, 
      mastering: 3,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShort&accessoriesType=Round&hairColor=Brown&facialHairType=Blank&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      name: 'Fernanda Costa', 
      email: 'fernanda@example.com', 
      completedTrainings: '9/10', 
      class: 'C', 
      averageGrade: 7.5, 
      priority: 5, 
      progressing: 5, 
      mastering: 2,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    }
    // Adicione mais alunos conforme necessário
  ];

  displayedColumns: string[] = ['name', 'completedTrainings', 'averageGrade', 'class', 'priority', 'progressing', 'mastering'];
  studentsDataSource = new MatTableDataSource<Student>(this.students);

  ngAfterViewInit() {
    this.studentsDataSource.paginator = this.paginator;
    this.studentsDataSource.sort = this.sort;
  }
}
