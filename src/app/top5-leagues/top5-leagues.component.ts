import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LeagueTablePosition} from '../model/LeagueTablePosition';

@Component({
  selector: 'app-top5-leagues',
  templateUrl: './top5-leagues.component.html',
  styleUrls: ['./top5-leagues.component.css']
})
export class Top5LeaguesComponent implements OnInit {

  leagueTablePositionList = new Array<LeagueTablePosition>();

  message = '';
  backgroundImageURL: string;

  activeCompetitionNo: number;

  constructor(private dataService: DataService,
              private  router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.processUrlParams();
  }

  processUrlParams(): void {
    this.route.queryParams.subscribe(
      (params) => {
        this.activeCompetitionNo = params['competitionId'];
        this.backgroundImageURL = 'url(../assets/img/' + this.activeCompetitionNo + '_motive.jpg';
        this.loadData('total');
      });
  }

  loadData(type: string): void {
    this.message = '';
    console.log(this.activeCompetitionNo + ' type: ' + type);
    this.dataService.getLeagueTableResultsOfType(this.activeCompetitionNo, type).subscribe(
      input => {
        this.leagueTablePositionList = input;
        if (this.leagueTablePositionList.length === 0) {
          this.message = 'There is no data for this particular league.';
        }
      },
      error => {
        this.message = 'Error connecting to the server. Try again later.';
        this.leagueTablePositionList = [];
      }
    );
  }


}
