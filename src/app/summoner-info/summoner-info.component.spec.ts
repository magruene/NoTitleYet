import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdGridListModule,
  MdProgressSpinnerModule} from '@angular/material';

import { SummonerInfoComponent } from './summoner-info.component';
import { LeagueService } from '../services/league.service';
import { SessionInfoService } from '../services/session-info.service';
import {Router} from "@angular/router";

describe('SummonerInfoComponent', () => {
  let component: SummonerInfoComponent;
  let fixture: ComponentFixture<SummonerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerInfoComponent ],
      imports: [
        MdCardModule,
        MdButtonModule,
        MdToolbarModule,
        MdSidenavModule,
        MdCheckboxModule,
        MdInputModule,
        MdIconModule,
        MdGridListModule,
        MdProgressSpinnerModule
      ],
      providers: [LeagueService, SessionInfoService, { provide: Router, useClass: class { navigateByUrl = jasmine.createSpy("navigateByUrl"); } }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
