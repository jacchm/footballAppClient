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

}
