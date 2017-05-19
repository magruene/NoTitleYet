import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MdCardModule,
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdGridListModule } from '@angular/material';

import { SummonerComponent } from './summoner.component';
import { LeagueService } from '../services/league.service';
import {SummonerInfoComponent} from "../summoner-info/summoner-info.component";
import {ActiveGameComponent} from "../active-game/active-game.component";
import {SessionInfoService} from "../services/session-info.service";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('SummonerComponent', () => {
  let component: SummonerComponent;
  let fixture: ComponentFixture<SummonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerComponent, SummonerInfoComponent, ActiveGameComponent ],
      imports: [
        MdCardModule,
        MdButtonModule,
        MdToolbarModule,
        MdSidenavModule,
        MdCheckboxModule,
        MdInputModule,
        MdIconModule,
        MdGridListModule,
        RouterTestingModule
      ],
      providers: [LeagueService, SessionInfoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
