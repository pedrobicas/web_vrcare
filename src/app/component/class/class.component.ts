import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';

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
    MatFormFieldModule,
    MatSortModule
  ],
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  turmaSelecionada = 'Turma A';
  mediaPontuacao = 7.7;
  mediaTreinamentosConcluidos = '6/10';
  displayedColumns: string[] = ['avatar', 'nome', 'treinamentos', 'posicao']; // Modificado para incluir avatar
  @ViewChild(MatSort) sort!: MatSort;
  // Adicionando avatares ao ranking
  ranking = [
    { 
      nome: 'Samuel Mendes', 
      treinamentos: '10/10', 
      media: 9.0, // Média do Samuel
      posicao: 1,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light' 
    },
    { 
      nome: 'Carla Santos', 
      treinamentos: '9/10', 
      media: 8.5, // Média da Carla
      posicao: 2,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light' 
    },
    { 
      nome: 'Sofia Marques', 
      treinamentos: '7/10', 
      media: 7.5, // Média da Sofia
      posicao: 3,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=Blazer&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light' 
    },
  ];
  

  grupos = [
    { quantidade: 5, descricao: '25% da turma', media: 4.2, cor: '#ffdddd' },
    { quantidade: 10, descricao: '50% da turma', media: 6.5, cor: '#fff4cc' },
    { quantidade: 5, descricao: '25% da turma', media: 8.9, cor: '#d9f2d9' },
  ];

  alunos = [
    { 
      nome: 'Carlos Oliveira', 
      treinamentos: '3/10', 
      media: 3.5, 
      precisaAtencao: 7, 
      progredindo: 2, 
      dominando: 1,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      nome: 'Luiza Souza', 
      treinamentos: '7/10', 
      media: 6.0, 
      precisaAtencao: 3, 
      progredindo: 5, 
      dominando: 2,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
    { 
      nome: 'Marina Santos', 
      treinamentos: '10/10', 
      media: 8.9, 
      precisaAtencao: 1, 
      progredindo: 3, 
      dominando: 6,
      avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=Blazer&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light'
    },
  ];
  
}
