import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sessions-recorded',
  standalone: true,
  templateUrl: './sessions-recorded.component.html',
  styleUrls: ['./sessions-recorded.component.css'],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class SessionsRecordedComponent {
  recordedSessions = [
    {
      title: 'Gravação: Treinamento VR',
      studentName: 'Ana Souza',
      className: 'Turma A',
      image: 'https://via.placeholder.com/300x150?text=Gravada+1',
    },
    {
      title: 'Gravação: Treinamento VR',
      studentName: 'Pedro Lima',
      className: 'Turma B',
      image: 'https://via.placeholder.com/300x150?text=Gravada+2',
    },
    {
      title: 'Gravação: Treinamento VR',
      studentName: 'Fernanda Alves',
      className: 'Turma C',
      image: 'https://via.placeholder.com/300x150?text=Gravada+3',
    },
  ];

  viewSession(session: any) {
    // Lógica para visualizar a sessão gravada
    console.log('Visualizando a sessão:', session.title);
  }
}
