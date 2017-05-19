import {Component, OnInit} from '@angular/core';

import {LeagueService} from '../services/league.service';
import {SessionInfoService} from '../services/session-info.service';

import{ActiveGame} from './active-game';
import {Router} from "@angular/router";

@Component({
  selector: 'app-active-game',
  templateUrl: './active-game.component.html',
  styleUrls: ['./active-game.component.css']
})
export class ActiveGameComponent implements OnInit {
  activeGame: ActiveGame;
  parentRouter: Router;

  constructor(private leagueService: LeagueService, private sessionInfo: SessionInfoService, router: Router) {
    this.parentRouter = router;
  }

  ngOnInit() {
    if (this.sessionInfo.summonerSubject.getValue() === null) {
      this.parentRouter.navigateByUrl('/search');
    } else {
      this.sessionInfo.summonerSubject.subscribe((summoner) => {
        this.leagueService.getActiveGame(summoner.id).subscribe((activeGame) => this.activeGame = activeGame);
      });
    }
  }
}
