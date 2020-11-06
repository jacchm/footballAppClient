import {Injectable} from '@angular/core';
import {LeagueTablePosition} from './model/LeagueTablePosition';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';
import {Team} from './model/Team';

@Injectable({
  providedIn: 'root'
})
export class DataService {

/*  getLeagueAllTableResults(competitionId: number): Observable<Array<LeagueTablePosition>>{
    return this.http.get<Array<LeagueTablePosition>>(environment.restUrl + '/results/getLeagueResults/' + competitionId)
      .pipe(
        map(data => {
          const leagueTablePositionList = new Array<LeagueTablePosition>();
          for (const leagueTablePosition of data){
            leagueTablePositionList.push(LeagueTablePosition.fromHttp(leagueTablePosition));
          }
          return leagueTablePositionList;
        })
      );
  }*/

  getLeagueTableResultsOfType(competitionId: number, type: string): Observable<Array<LeagueTablePosition>>{
    return this.http.get<Array<LeagueTablePosition>>('/api/results/league-results?league_id=' + competitionId
      + '&type=' + type)
      .pipe(
        map(data => {
          const leagueTablePositionList = new Array<LeagueTablePosition>();
          for (const leagueTablePosition of data){
            leagueTablePositionList.push(LeagueTablePosition.fromHttp(leagueTablePosition));
          }
          return leagueTablePositionList;
        })
      );
  }

  getLeagueTeams(competitionId: number): Observable<Array<Team>>{
    return this.http.get<Array<Team>>('/api/teams/league-teams?league_id=' + competitionId)
      .pipe(
        map(data => {
          const teamList = new Array<Team>();
          for (const team of data){
            teamList.push(Team.fromHttp(team));
          }
          return teamList;
        })
      );
  }

  constructor(private http: HttpClient) {
    console.log('Connecting to: ' + environment.restUrl);
  }
}
