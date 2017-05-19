import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Summoner} from '../summoner/summoner';
import {Observer} from "rxjs/Observer";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class SessionInfoService {
  summonerSubject: BehaviorSubject<Summoner>;
  summoner: Summoner;

  constructor() {
    this.summonerSubject = new BehaviorSubject<Summoner>(null);
  }

  setSummoner(summoner: Summoner) {
    this.summoner = summoner;
    this.summonerSubject.next(this.summoner);
  }

}
