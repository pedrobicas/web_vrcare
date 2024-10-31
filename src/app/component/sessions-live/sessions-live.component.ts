import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sessions-live',
  standalone: true,
  templateUrl: './sessions-live.component.html',
  styleUrls: ['./sessions-live.component.css'],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class SessionsLiveComponent {
  upcomingSessions = [
    {
      title: 'Sessão Treinamento VR - Ao Vivo',
      studentName: 'João Silva',
      className: 'Turma A',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
    },
    {
      title: 'Sessão de Prática de Cirurgia - Ao Vivo',
      studentName: 'Maria Oliveira',
      className: 'Turma B',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
    },
    {
      title: 'Sessão de Treinamento VR - Ao Vivo',
      studentName: 'Carlos Pereira',
      className: 'Turma C',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
    },
    {
      title: 'Sessão de Treinamento VR - Ao Vivo',
      studentName: 'Carlos Pereira',
      className: 'Turma C',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
    },
    {
      title: 'Sessão de Treinamento VR - Ao Vivo',
      studentName: 'Carlos Pereira',
      className: 'Turma C',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
    },
  ];

  joinSession(session: any) {
    // Lógica para participar da sessão
    console.log('Participando da sessão:', session.title);
  }
}
