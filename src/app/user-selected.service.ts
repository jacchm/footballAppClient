import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSelectedService {
// TODO: class to be used to hold currently chosen league and team info

  activeLeagueId: number;
  activeTeamId: number;

  @Output()
  activeLeagueSetEvent = new EventEmitter<number>();
  @Output()
  activeTeamSetEvent = new EventEmitter<number>();

  constructor() {
  }

  activeLeagueSet(activeLeagueId: number): void {
    this.activeLeagueId = activeLeagueId;
    this.activeLeagueSetEvent.emit(this.activeLeagueId);
  }

  activeTeamSet(activeTeamId: number): void {
    this.activeTeamId = activeTeamId;
    this.activeTeamSetEvent.emit(this.activeLeagueId);
  }


}
