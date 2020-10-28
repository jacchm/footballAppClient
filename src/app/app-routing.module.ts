import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ChampionsLeagueComponent} from './champions-league/champions-league.component';
import {EuropaLeagueComponent} from './europa-league/europa-league.component';
import {Top5LeaguesComponent} from './top5-leagues/top5-leagues.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'champions-league', component: ChampionsLeagueComponent},
  {path: 'europa-league', component: EuropaLeagueComponent},
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
