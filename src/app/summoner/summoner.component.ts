import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service'
import {Summoner} from "./summoner";

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {
  summoner:Summoner;
  leagueService:LeagueService;

  constructor(leagueService: LeagueService) {
    this.leagueService = leagueService;
  }

  ngOnInit() {
    this.leagueService.getSummoner("Cl4nnad").subscribe(s => this.summoner = s);
  }

}
