import {Area} from './Area';
import {Season} from './Season';

export class Competition {

  id: number;
  area: Area;
  name: string;
  code: string;
  ensignUrl: string;
  plan: string;
  currentSeason: Season;
  numberOfAvailableSeasons: number;
  lastUpdated: string; // LocalDateTime in backend

  static fromHttp(competition: Competition): Competition {
    const newCompetition = new Competition();
    newCompetition.id = competition.id;
    newCompetition.area = Area.fromHttp(competition.area);
    newCompetition.name = competition.name;
    newCompetition.code = competition.code;
    newCompetition.ensignUrl = competition.ensignUrl;
    newCompetition.plan = competition.plan;
    newCompetition.currentSeason = Season.fromHttp(competition.currentSeason);
    newCompetition.numberOfAvailableSeasons = competition.numberOfAvailableSeasons;
    newCompetition.lastUpdated = competition.lastUpdated;
    return newCompetition;
  }

}
