import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaLeagueComponent } from './europa-league.component';

describe('EuropaLeagueComponent', () => {
  let component: EuropaLeagueComponent;
  let fixture: ComponentFixture<EuropaLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropaLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropaLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
