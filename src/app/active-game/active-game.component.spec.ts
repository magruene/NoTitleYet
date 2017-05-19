import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveGameComponent } from './active-game.component';
import {MdCardModule, MdProgressSpinnerModule} from "@angular/material";
import {LeagueService} from "../services/league.service";
import {SessionInfoService} from "../services/session-info.service";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";

describe('ActiveGameComponent', () => {
  let component: ActiveGameComponent;
  let fixture: ComponentFixture<ActiveGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveGameComponent ],
      imports: [
        MdProgressSpinnerModule,
        MdCardModule,
        HttpModule,
        RouterTestingModule
      ],
      providers: [LeagueService, SessionInfoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
