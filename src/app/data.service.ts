import {Injectable} from '@angular/core';
import {Area} from './model/Area';
import {Team} from './model/Team';
import {TableInput} from './model/TableInput';
import {Standing} from './model/Standing';
import {Competition} from './model/Competition';
import {Season} from './model/Season';
import {StandingInput} from './model/StandingInput';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private areas: Array<Area>;
  // private teams: Array<Team>;
  // private tableInputs: Array<TableInput>;
  standingInput: StandingInput;

  getStandingInput(): Observable<StandingInput> {
    return of(this.standingInput);
  }

  constructor() {

    const competitionEng = new Competition();
    competitionEng.id = 2021;

    const area1 = new Area();
    area1.id = 2072;
    area1.name = 'England';
    competitionEng.area = area1;

    competitionEng.name = 'Premier League';
    competitionEng.code = 'PL';
    competitionEng.plan = 'TIER_ONE';
    competitionEng.lastUpdated = '2020-09-28T23:59:36Z';

    const seasonEng = new Season();
    seasonEng.id = 619;
    seasonEng.startDate = '2020-09-12';
    seasonEng.endDate = '2021-05-23';
    seasonEng.currentMatchday = 3;
    seasonEng.winner = null;
    competitionEng.currentSeason = seasonEng;

    const standingEng = new Standing();
    standingEng.id = null;
    standingEng.stage = 'REGULAR_SEASON';
    standingEng.type = 'TOTAL';
    standingEng.group = null;

    // 1st team
    const tableInputEng1 = new TableInput();
    tableInputEng1.position = 1;

    const teamEng1 = new Team();
    teamEng1.id = 338;
    teamEng1.name = 'Leicester City FC';
    teamEng1.crestUrl = 'https://crests.football-data.org/338.svg';

    tableInputEng1.team = teamEng1;
    tableInputEng1.playedGames = 3;
    tableInputEng1.form = 'W,W,W';
    tableInputEng1.won = 3;
    tableInputEng1.draw = 0;
    tableInputEng1.lost = 0;
    tableInputEng1.points = 9;
    tableInputEng1.goalsFor = 12;
    tableInputEng1.goalsAgainst = 4;
    tableInputEng1.goalDifference = 8;

    // 2nd team
    const tableInputEng2 = new TableInput();
    tableInputEng2.position = 2;

    const teamEng2 = new Team();
    teamEng2.id = 64;
    teamEng2.name = 'Liverpool FC';
    teamEng2.crestUrl = 'https://crests.football-data.org/64.svg';

    tableInputEng2.team = teamEng2;
    tableInputEng2.playedGames = 3;
    tableInputEng2.form = 'W,W,W';
    tableInputEng2.won = 3;
    tableInputEng2.draw = 0;
    tableInputEng2.lost = 0;
    tableInputEng2.points = 9;
    tableInputEng2.goalsFor = 9;
    tableInputEng2.goalsAgainst = 4;
    tableInputEng2.goalDifference = 5;

    // 3rd team
    const tableInputEng3 = new TableInput();
    tableInputEng3.position = 3;

    const teamEng3 = new Team();
    teamEng3.id = 62;
    teamEng3.name = 'Everton FC';
    teamEng3.crestUrl = 'https://crests.football-data.org/62.svg';

    tableInputEng3.team = teamEng3;
    tableInputEng3.playedGames = 3;
    tableInputEng3.form = 'W,W,W';
    tableInputEng3.won = 3;
    tableInputEng3.draw = 0;
    tableInputEng3.lost = 0;
    tableInputEng3.points = 9;
    tableInputEng3.goalsFor = 8;
    tableInputEng3.goalsAgainst = 3;
    tableInputEng3.goalDifference = 5;

    const tableInputEng4 = new TableInput();
    tableInputEng4.position = 4;

    const teamEng4 = new Team();
    teamEng4.id = 58;
    teamEng4.name = 'Aston Villa FC';
    teamEng4.crestUrl = 'https://crests.football-data.org/58.svg';

    // 4th team
    tableInputEng4.team = teamEng4;
    tableInputEng4.playedGames = 2;
    tableInputEng4.form = 'W,W';
    tableInputEng4.won = 2;
    tableInputEng4.draw = 0;
    tableInputEng4.lost = 0;
    tableInputEng4.points = 6;
    tableInputEng4.goalsFor = 4;
    tableInputEng4.goalsAgainst = 0;
    tableInputEng4.goalDifference = 4;

    // 5th team
    const tableInputEng5 = new TableInput();
    tableInputEng5.position = 5;

    const teamEng5 = new Team();
    teamEng5.id = 57;
    teamEng5.name = 'Arsenal FC';
    teamEng5.crestUrl = 'https://crests.football-data.org/57.svg';

    tableInputEng5.team = teamEng5;
    tableInputEng5.playedGames = 2;
    tableInputEng5.form = 'W,W';
    tableInputEng5.won = 2;
    tableInputEng5.draw = 0;
    tableInputEng5.lost = 0;
    tableInputEng5.points = 6;
    tableInputEng5.goalsFor = 4;
    tableInputEng5.goalsAgainst = 0;
    tableInputEng5.goalDifference = 4;

    // standing
    standingEng.table = new Array<TableInput>();
    standingEng.table.push(tableInputEng1, tableInputEng2, tableInputEng3, tableInputEng4, tableInputEng5);

    this.standingInput = new StandingInput();
    this.standingInput.competition = competitionEng;
    this.standingInput.season = seasonEng;
    this.standingInput.standings = new Array<Standing>();
    this.standingInput.standings.push(standingEng);

  }
}
