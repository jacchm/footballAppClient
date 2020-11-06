import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToTop5Leagues(leagueId: number): void {
    this.router.navigate(['top5-league'], {queryParams: {league_id: leagueId}});
  }

  navigateToLeagueTeams(leagueId: number): void {
    this.router.navigate(['teams'], {queryParams: {league_id: leagueId}});
  }

}
