import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StandingInput} from '../model/StandingInput';

@Component({
  selector: 'app-top5-leagues',
  templateUrl: './top5-leagues.component.html',
  styleUrls: ['./top5-leagues.component.css']
})
export class Top5LeaguesComponent implements OnInit {

  standingInput: StandingInput;

  constructor(private dataService: DataService,
              private  router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getStandingInput().subscribe(
      next => {
        this.standingInput = next;
        console.log(this.standingInput);
      },
      error => console.log('Something went wrong')
    );
  }

}
