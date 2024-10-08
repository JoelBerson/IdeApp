// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './demo/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./demo/home/home.component').then(m => m.HomeComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'announcement',
        loadComponent: () => import('./demo/announcement/announcement.component').then(m => m.AnnouncementComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'cult-control/dashboard',
        loadComponent: () => import('./demo/cult-control/cult-control.component').then(m => m.CultControlComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'cult-control/new',
        loadComponent: () => import('./demo/cult-control/new-cult/new-cult.component').then(m => m.NewCultComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'cult-control/visitor',
        loadComponent: () => import('./demo/cult-control/new-cult-visit/new-cult-visit.component').then(m => m.NewCultVisitComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'cult-control/reception-team',
        loadComponent: () => import('./demo/cult-control/reception-team/reception-team.component').then(m => m.ReceptionTeamComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'cult-control/visitor-list',
        loadComponent: () => import('./demo/cult-control/visitor/visitor.component').then(m => m.VisitorComponent),
        canActivate: [AuthGuard]
      },
      {
        path: 'cult-control/cult-details/:id',
        loadComponent: () => import('./demo/cult-control/cult-details/cult-details.component').then(m => m.CultDetailsComponent),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
      },
      {
        path: 'profissionais',
        loadComponent: () => import('./demo/public-announcements/public-announcements.component').then(m => m.PublicAnnouncementsComponent)
      },
      {
        path: 'resources',
        loadComponent: () => import('./demo/resources/resources.component').then(m => m.ResourcesComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
