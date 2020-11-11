import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Team} from '../model/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  teamsList: Array<Team>;
  selectedTeam: Team = new Team();

  serverConnectionError = false;
  noDataMsg = 'There is no data.';
  errorMsg = 'Error encountered connecting to the server.';
  backgroundImageURL: string;

  activeCompetitionNo: number;


  ngOnInit(): void {
    this.processUrlParams();
  }

  processUrlParams(): void {
    this.route.queryParams.subscribe(
      (params) => {
        this.activeCompetitionNo = params['league_id'];
        this.backgroundImageURL = `url(../assets/img/${this.activeCompetitionNo}_motive.jpg`;
        this.loadData();
      });
  }

  loadData(): void {
    this.serverConnectionError = false;
    this.dataService.getLeagueTeams(this.activeCompetitionNo).subscribe(
      input => {
        this.teamsList = input;
      },
      error => {
        this.serverConnectionError = true;
      }
    );
  }

  setSelectedTeam(team: Team): void {
    this.selectedTeam = team;
  }

}
