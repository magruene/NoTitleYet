import {Component, Input, OnInit} from '@angular/core';
import { LeagueService } from '../services/league.service'
import { SessionInfoService } from '../services/session-info.service'
import {Summoner} from "../summoner/summoner";
import {Router} from "@angular/router";

@Component({
  selector: 'app-summoner-info',
  templateUrl: './summoner-info.component.html',
  styleUrls: ['./summoner-info.component.css']
})
export class SummonerInfoComponent implements OnInit {
  parentRouter: Router;
  summoner:Summoner;

  constructor(private sessionInfo: SessionInfoService, router:Router) {
    this.parentRouter = router;
  }

  ngOnInit() {
    if (this.sessionInfo.summonerSubject.getValue() === null) {
      this.parentRouter.navigateByUrl('/search');
    } else {
      this.sessionInfo.summonerSubject.subscribe((summoner) => {
        this.summoner = summoner;
      });
    }

  }
}
