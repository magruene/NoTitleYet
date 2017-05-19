import {element, by, browser} from 'protractor';

export class SummonerHomePage {
  getSummonerName() {
    browser.waitForAngularEnabled(true);
    return element(by.id('summonerName')).getText();
  }

  getSummonerLevel() {
    browser.waitForAngularEnabled(true);
    return element(by.id('summonerLevel')).getText();
  }
}
