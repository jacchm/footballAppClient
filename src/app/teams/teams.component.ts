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

  teamsList = new Array<Team>();
  selectedTeam: Team = new Team();
  selectedTeamCrest = 'none';

  message = '';
  backgroundImageURL: string;

  activeCompetitionNo: number;


  ngOnInit(): void {
    this.processUrlParams();
  }

  processUrlParams(): void {
    this.route.queryParams.subscribe(
      (params) => {
        this.activeCompetitionNo = params['league_id'];
        this.backgroundImageURL = 'url(../assets/img/' + this.activeCompetitionNo + '_motive.jpg';
        this.loadData();
      });
  }

  loadData(): void {
    this.message = '';
    console.log(this.activeCompetitionNo);
    this.dataService.getLeagueTeams(this.activeCompetitionNo).subscribe(
      input => {
        this.teamsList = input;
        if (this.teamsList.length === 0) {
          this.message = 'There is no data for this particular league.';
        }
      },
      error => {
        this.message = 'Error connecting to the server. Try again later.';
        this.teamsList = [];
      }
    );
  }

  setSelectedTeam(team: Team): void {
    this.selectedTeam = team;
    this.selectedTeamCrest = this.selectedTeam.crestUrl;
    console.log(this.selectedTeamCrest);
  }

}
