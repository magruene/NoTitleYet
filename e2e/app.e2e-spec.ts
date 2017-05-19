import { SearchSummonerPage } from './search-summoner.po';
import {SummonerHomePage} from "./summoner-home.po";

describe('no-title-yet App', () => {
  let summonerSearch: SearchSummonerPage;
  let summonerHome: SummonerHomePage;

  beforeEach(() => {
    summonerSearch = new SearchSummonerPage();
    summonerHome = new SummonerHomePage();
  });

  it('should display message saying app works', () => {

    summonerSearch.navigateTo();
    expect(summonerSearch.getParagraphText()).toEqual('NoTitleYet');
  });

  it('should be able to fill out dialog', () => {
    summonerSearch.navigateTo();
    summonerSearch.searchSummoner("Cl4nnad", "EUW");
    expect(summonerHome.getSummonerLevel()).toContain("30");
    expect(summonerHome.getSummonerName()).toContain("Cl4nnad");
  });
});
