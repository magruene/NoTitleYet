import {Component, Input, OnInit} from '@angular/core';
import { LeagueService } from '../league.service'
import {Summoner} from "./summoner";

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {
  @Input() summonerName:string;
  @Input() region:string;

  summoner:Summoner;
  leagueService:LeagueService;

  constructor(leagueService: LeagueService) {
    this.leagueService = leagueService;
  }

  ngOnInit() {
    this.leagueService.getSummoner(this.summonerName, this.region).subscribe(s => this.summoner = s);
  }

}
