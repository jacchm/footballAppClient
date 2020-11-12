import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LeagueTablePosition} from '../model/LeagueTablePosition';
import {UserSelectedService} from '../user-selected.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  leagueTablePositionList: Array<LeagueTablePosition>;

  serverConnectionError = false;
  noDataMsg = 'There is no data.';
  errorMsg = 'Error encountered connecting to the server.';

  backgroundImageURL: string;
  activeCompetitionId: number;

  constructor(private dataService: DataService,
              private activatedService: UserSelectedService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.processUrlParams();
  }

  processUrlParams(): void {
    this.route.queryParams.subscribe(
      (params) => {
        this.activeCompetitionId = params['league_id'];
        this.backgroundImageURL = `url(../assets/img/${this.activeCompetitionId}_motive.jpg`;
        this.loadData('TOTAL');
      });
  }

  loadData(type: string): void {
    this.serverConnectionError = false;
    this.dataService.getLeagueTableResultsOfType(this.activeCompetitionId, type).subscribe(
      input => {
        this.leagueTablePositionList = input;
      },
      error => {
        this.serverConnectionError = true;
      }
    );
  }


}
