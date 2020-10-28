import {Team} from './Team';

export class Season {

  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: Team;

  static fromHttp(season: Season): Season {
    const newSeason = new Season();
    newSeason.id = season.id;
    newSeason.startDate = season.startDate;
    newSeason.endDate = season.endDate;
    newSeason.currentMatchday = season.currentMatchday;
    newSeason.winner = season.winner;
    return newSeason;
  }
}
