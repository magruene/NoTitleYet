import {browser, element, by} from 'protractor';

export class SearchSummonerPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('title')).getText();
  }

  searchSummoner(summonerName: string, region: string) {
    element(by.name('summonerName')).sendKeys(summonerName);
    browser.driver.sleep(500);
    element(by.css('md-radio-button[ng-reflect-value="' + region + '"]')).click();
    element(by.id("searchBtn")).click();
  }
}
