import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {SupportedLeague} from '../model/SupportedLeague';
import {UserSelectedService} from '../user-selected.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listOfLeagues = new Array<SupportedLeague>();

  constructor(private router: Router,
              private dataService: DataService,
              private activatedService: UserSelectedService) {
  }

  ngOnInit(): void {
    this.listOfLeagues = this.dataService.listOfLeagues;
  }

  navigateToLeague(leagueId: number): void {
    // TODO: implement userSelected
    this.activatedService.activeLeagueSet(leagueId);
    this.router.navigate(['league'], {queryParams: {league_id: leagueId}});
  }

  navigateToLeagueTeams(leagueId: number): void {
    this.activatedService.activeLeagueSet(leagueId);
    this.router.navigate(['teams'], {queryParams: {league_id: leagueId}});
  }

}
