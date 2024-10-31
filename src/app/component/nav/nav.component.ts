import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    AsyncPipe,
    DashboardComponent,
    RouterLink,
    RouterOutlet,
    CommonModule
  ]
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  pageTitle: string = 'Visão Geral';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updatePageTitle(event.urlAfterRedirects);
      }
    });
  }

  updatePageTitle(url: string) {
    switch (url) {
      case '/':
        this.pageTitle = 'Visão Geral';
        break;
      case '/sessions-live':
        this.pageTitle = 'Sessões ao vivo';
        break;
      case '/sessions-recorded':
        this.pageTitle = 'Sessões gravadas';
        break;
      case '/table':
        this.pageTitle = 'Relatórios';
        break;
      case '/stepper':
        this.pageTitle = 'Turma';
        break;
      default:
        this.pageTitle = 'Painel de Controle';
        break;
    }
  }
}
