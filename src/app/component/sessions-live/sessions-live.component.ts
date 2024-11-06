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
      studentName: 'Rafael Costa',
      className: 'Turma A',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
      avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Round&hairColor=Brown&facialHairType=BeardMedium&clotheType=Shirt&eyeType=Squint&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    },
    {
      studentName: 'Mariana Lima',
      className: 'Turma B',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
      avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=Blonde&facialHairType=BeardLight&clotheType=Hoodie&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light',
    },
    {
      studentName: 'Felipe Martins',
      className: 'Turma C',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
      avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Black&facialHairType=BeardMedium&clotheType=Shirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    },
    {
      studentName: 'Henrique Silva',
      className: 'Turma D',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
      avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Blonde&facialHairType=BeardLight&clotheType=Suit&eyeType=Surprised&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    },
    {
      studentName: 'Juliana Barbosa',
      className: 'Turma E',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
      avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Round&hairColor=Black&facialHairType=BeardLight&clotheType=Blazer&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    },
    {
      studentName: 'Leonardo Rocha',
      className: 'Turma F',
      image: 'https://via.placeholder.com/300x150?text=Ao+Vivo',
      avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Round&hairColor=Black&facialHairType=BeardLight&clotheType=Shirt&eyeType=Squint&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    },
  ];

  joinSession(session: any) {
    console.log('Participando da sessão:', session.studentName);
  }
}
