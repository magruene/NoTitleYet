import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LeagueService} from "../services/league.service";
import {SessionInfoService} from "../services/session-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-summoner',
  templateUrl: './search-summoner.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search-summoner.component.scss']
})
export class SearchSummonerComponent implements OnInit {
  parentRouter: Router;
  selectedRegion: string;
  summoner: string;
  regions: Object;


  constructor( private leagueService: LeagueService, private sessionInfo:SessionInfoService, router:Router) {
    this.parentRouter = router;
  }

  searchSummoner() {
    this.leagueService.getSummoner(this.summoner, this.selectedRegion).subscribe(s => {
      this.sessionInfo.setSummoner(s);
      this.parentRouter.navigateByUrl(`/home/${s.id}`);
    });
  }

  ngOnInit() {
    this.leagueService.getRegions().subscribe(regions => this.regions = regions);
  }

}
