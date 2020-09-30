import {Competition} from './Competition';
import {Season} from './Season';
import {Standing} from './Standing';

export class StandingInput {

  competition: Competition;
  season: Season;
  standings: Array<Standing>;
}
