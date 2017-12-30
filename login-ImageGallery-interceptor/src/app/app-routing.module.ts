import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';

import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { SComponent } from './s/s.component';
import {S2Component} from './s2/s2.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
 
  {
    path: 'servers',
   
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
   
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'images',  canActivate: [AuthGuard],component:SComponent},
  { path: 'persons', canActivate: [AuthGuard], component:S2Component},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
