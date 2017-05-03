import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Summoner} from './summoner/summoner';

@Injectable()
export class LeagueService {

  private baseUrl:string = 'http://localhost:8080';

  constructor(private http: Http) {
  }

  getSummoner(name): Observable<Summoner> {
    return this.http
      .get(`${this.baseUrl}/summoner/by-name/${name}`, {headers: LeagueService.getHeaders()})
      .map(LeagueService.toPerson);
  }

  private static toPerson(r: any): Summoner {
    let response = r.json();

    let summoner = <Summoner>({
      level: response.summonerLevel,
      icon: response.profileIconId,
      name: response.name
    });
    console.log('Parsed summoner:', summoner);
    return summoner;
  }

  private static getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
