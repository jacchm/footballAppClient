import {Injectable} from '@angular/core';
import {LeagueTablePosition} from './model/LeagueTablePosition';
import {SupportedLeague} from './model/SupportedLeague';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Team} from './model/Team';
import {environment} from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  listOfLeagues = new Array<SupportedLeague>();
  herokuUrl = environment.restUrl;

  getLeagueTableResultsOfType(competitionId: number, type: string): Observable<Array<LeagueTablePosition>> {
    return this.http.get<Array<LeagueTablePosition>>(
      `${this.herokuUrl}/api/results/league-results?league_id=${competitionId}&type=${type}`);
  }

  getLeagueTeams(competitionId: number): Observable<Array<Team>> {
    return this.http.get<Array<Team>>(`${this.herokuUrl}/api/teams/league-teams?league_id=${competitionId}`);
  }

  constructor(private http: HttpClient) {

    this.listOfLeagues.push(new SupportedLeague(2021, 'Premier League'));
    this.listOfLeagues.push(new SupportedLeague(2002, 'Bundesliga'));
    this.listOfLeagues.push(new SupportedLeague(2014, 'La Liga'));
    this.listOfLeagues.push(new SupportedLeague(2019, 'Serie A'));
    this.listOfLeagues.push(new SupportedLeague(2015, 'League 1'));

  }

}
