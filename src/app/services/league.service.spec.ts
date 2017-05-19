import { TestBed, inject } from '@angular/core/testing';

import {HttpModule, Response} from '@angular/http';
import { LeagueService } from './league.service';

describe('LeagueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [LeagueService]
    });
  });

  it('should map summoner from response', () => {
    let json = JSON.parse('{"id": 24270077, "revisionDate": 1493752517000, "summonerLevel": 30, "profileIconId": 657, "name": "Cl4nnad"}');
    let summoner = LeagueService.toPerson(json);

    expect(summoner.icon).toBe(657);
    expect(summoner.name).toBe("Cl4nnad");
    expect(summoner.level).toBe(30);
  });

  it('should provide expected headers', () => {
    let headers = LeagueService.getHeaders();
    expect(headers.get("Accept")).toBe("application/json");
  });
});
