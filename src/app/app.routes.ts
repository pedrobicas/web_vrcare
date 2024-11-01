import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component'
import { SessionsLiveComponent } from './component/sessions-live/sessions-live.component';
import { SessionsRecordedComponent } from './component/sessions-recorded/sessions-recorded.component';
import { StudentsComponent } from './component/students/students.component';
import { ClassComponent } from './component/class/class.component';

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title:"Painel de controle", component: HomeComponent },
  { path: 'sessions-live', title:"Sessões Ao Vivo", component: SessionsLiveComponent },
  { path: 'sessions-recorded', title:"Sessões Gravadas",component: SessionsRecordedComponent },
  { path: 'students', title:"Alunos",component: StudentsComponent },
  { path: 'class', title:"Turmas",component: ClassComponent },
];
