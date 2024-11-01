import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  turmaSelecionada = 'Turma A';
  mediaPontuacao = 7.7;
  mediaTreinamentosConcluidos = '6/10';
  displayedColumns: string[] = ['name', 'trainings', 'score', 'priority', 'progressing', 'mastering'];
  ranking = [
    { nome: 'Samuel Mendes', treinamentos: '10/10', posicao: 1 },
    { nome: 'Carla Santos', treinamentos: '9/10', posicao: 2 },
    { nome: 'Sofia Marques', treinamentos: '7/10', posicao: 3 },
  ];

  grupos = [
    { quantidade: 5, descricao: '25% da turma', media: 4.2, cor: '#ffdddd' },
    { quantidade: 10, descricao: '50% da turma', media: 6.5, cor: '#fff4cc' },
    { quantidade: 5, descricao: '25% da turma', media: 8.9, cor: '#d9f2d9' },
  ];

  alunos = [
    { nome: 'Carlos Oliveira', treinamentos: '3/10', media: 3.5, precisaAtencao: 7, progredindo: 2, dominando: 1 },
    { nome: 'Luiza Souza', treinamentos: '7/10', media: 6.0, precisaAtencao: 3, progredindo: 5, dominando: 2 },
    { nome: 'Marina Santos', treinamentos: '10/10', media: 8.9, precisaAtencao: 1, progredindo: 3, dominando: 6 },
  ];
}
