import {Team} from './Team';

export class LeagueTablePosition {

  competitionId: number;
  type: string;
  position: number;
  team: Team;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;

  static fromHttp(leagueTablePosition: LeagueTablePosition): LeagueTablePosition {
    const newLeagueTablePosition = new LeagueTablePosition();

    newLeagueTablePosition.competitionId = leagueTablePosition.competitionId;
    newLeagueTablePosition.type = leagueTablePosition.type;
    newLeagueTablePosition.position = leagueTablePosition.position;
    newLeagueTablePosition.team = Team.fromHttp(leagueTablePosition.team);
    newLeagueTablePosition.playedGames = leagueTablePosition.playedGames;
    newLeagueTablePosition.form = leagueTablePosition.form;
    newLeagueTablePosition.won = leagueTablePosition.won;
    newLeagueTablePosition.draw = leagueTablePosition.draw;
    newLeagueTablePosition.lost = leagueTablePosition.lost;
    newLeagueTablePosition.points = leagueTablePosition.points;
    newLeagueTablePosition.goalsFor = leagueTablePosition.goalsFor;
    newLeagueTablePosition.goalsAgainst = leagueTablePosition.goalsAgainst;
    newLeagueTablePosition.goalDifference = leagueTablePosition.goalDifference;
    return newLeagueTablePosition;
  }

}
