import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LeagueComponent} from './league/league.component';
import {HomeComponent} from './home/home.component';
import {TeamsComponent} from './teams/teams.component';
import {AdminPanelComponent} from './admin/admin-panel.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: 'league', component: LeagueComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
