import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {Top5LeaguesComponent} from './top5-leagues/top5-leagues.component';
import {HomeComponent} from './home/home.component';
import {TeamsComponent} from './teams/teams.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'top5-league', component: Top5LeaguesComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
