import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableComponent } from './component/table/table.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { SessionsLiveComponent } from './component/sessions-live/sessions-live.component';
import { SessionsRecordedComponent } from './component/sessions-recorded/sessions-recorded.component';

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title:"Home", component: HomeComponent },
  { path: 'dashboard', title:"Dashboard", component: DashboardComponent },
  { path: 'table', title:"Table", component: TableComponent },
  { path: 'stepper', title:"Stepper", component: StepperComponent },
  { path: 'sessions-live', component: SessionsLiveComponent },
  { path: 'sessions-recorded', component: SessionsRecordedComponent },
];
