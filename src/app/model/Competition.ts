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

}
