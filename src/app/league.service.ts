import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Summoner} from './summoner/summoner';

@Injectable()
export class LeagueService {

  private baseUrl:string = 'http://localhost:8080';

  constructor(private http: Http) {
  }

  getSummoner(name, region): Observable<Summoner> {
    return this.http
      .get(`${this.baseUrl}/summoner/by-name/${name}?region=${region}`, {headers: LeagueService.getHeaders()})
      .map(respose => {
        return LeagueService.toPerson(respose.json());
      });
  }

  getRegions(): Observable<object> {
    return this.http
      .get(`${this.baseUrl}/region`, {headers: LeagueService.getHeaders()})
      .map(respose => respose.json());
  }

  static toPerson(response: any): Summoner {
    let summoner = <Summoner>({
      level: response.summonerLevel,
      icon: response.profileIconId,
      name: response.name
    });
    console.log('Parsed summoner:', summoner);
    return summoner;
  }

  static getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
