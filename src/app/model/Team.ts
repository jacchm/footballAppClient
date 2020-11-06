import {Area} from './Area';

export class Team {

  id: number;
  area: Area;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: string;
  clubColors: string;
  venue: string;
  lastUpdated: string; // LocalDate from back-end

  static fromHttp(team: Team): Team {
    const newTeam = new Team();
    newTeam.id = team.id;
    newTeam.area = Area.fromHttp(team.area);
    newTeam.name = team.name;
    newTeam.shortName = team.shortName;
    newTeam.tla = team.tla;
    newTeam.crestUrl = team.crestUrl;
    newTeam.address = team.address;
    newTeam.phone = team.phone;
    newTeam.website = team.website;
    newTeam.email = team.email;
    newTeam.founded = team.founded;
    newTeam.clubColors = team.clubColors;
    newTeam.venue = team.venue;
    newTeam.lastUpdated = team.lastUpdated;
    return newTeam;
  }

}
