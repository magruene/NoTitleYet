import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Summoner} from '../summoner/summoner';
import {ActiveGame} from "../active-game/active-game";

@Injectable()
export class LeagueService {

  private baseUrl:string = 'http://localhost:8080';

  constructor(private http: Http) {
  }

  getSummoner(name, region): Observable<Summoner> {
    return this.http
      .get(`${this.baseUrl}/summoner/by-name/${name}?region=${region}`, {headers: LeagueService.getHeaders()})
      .map(response => {
        return LeagueService.toPerson(response.json());
      });
  }

  getRegions(): Observable<object> {
    return this.http
      .get(`${this.baseUrl}/region`, {headers: LeagueService.getHeaders()})
      .map(response => response.json());
  }

  static toPerson(response: any): Summoner {
    return <Summoner>({
      id: response.id,
      level: response.summonerLevel,
      icon: response.profileIconId,
      name: response.name
    });
  }

  static getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getActiveGame(summonerId: number): Observable<ActiveGame> {
    return this.http
      .get(`${this.baseUrl}/summoner/game-info/${summonerId}`, {headers: LeagueService.getHeaders()})
      .map(response => {
        return <ActiveGame> response.json();
      });
  }
}
