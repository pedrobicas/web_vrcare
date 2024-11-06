import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
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
    AsyncPipe,
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
  pageSubtitle: string = ''; // Adicione o subtítulo aqui se necessário
  currentRoute: string = '/';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updatePageTitle(event.urlAfterRedirects);
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  updatePageTitle(url: string) {
    switch (url) {
      case '/home':
        this.pageTitle = 'Visão Geral';
        this.pageSubtitle = 'Seja bem-vindo ao VRCare+';
        break;
      case '/sessions-live':
        this.pageTitle = 'Sessões ao vivo';
        this.pageSubtitle = 'Acesse as sessões ao vivo disponíveis';
        break;
      case '/sessions-recorded':
        this.pageTitle = 'Sessões gravadas';
        this.pageSubtitle = 'Acesse as sessões gravadas';
        break;
      case '/students':
        this.pageTitle = 'Alunos';
        this.pageSubtitle = 'Gerencie os alunos';
        break;
      case '/class':
        this.pageTitle = 'Turmas';
        this.pageSubtitle = 'Detalhes das turmas';
        break;
    }
  }

  isActiveRoute(route: string): boolean {
    return this.currentRoute === route;
  }

  closeDrawer(drawer: any) {
    this.isHandset$.subscribe(isHandset => {
      if (isHandset) {
        drawer.close();
      }
    }).unsubscribe();
  }
}
