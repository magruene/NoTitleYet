import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {
  MdInputModule,
  MdRadioModule,
  MdButtonModule
} from '@angular/material';


import {SearchSummonerComponent} from './search-summoner.component';
import {FormsModule} from "@angular/forms";
import {LeagueService} from "../services/league.service";
import {SessionInfoService} from "../services/session-info.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";

describe('SearchSummonerComponent', () => {
  let component: SearchSummonerComponent;
  let fixture: ComponentFixture<SearchSummonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSummonerComponent],
      imports: [
        MdInputModule,
        MdRadioModule,
        FormsModule,
        MdButtonModule,
        HttpModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [LeagueService, SessionInfoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSummonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
