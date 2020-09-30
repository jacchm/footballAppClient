import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5LeaguesComponent } from './top5-leagues.component';

describe('Top5LeaguesComponent', () => {
  let component: Top5LeaguesComponent;
  let fixture: ComponentFixture<Top5LeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5LeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5LeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
