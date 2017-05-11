import {browser, element, by} from 'protractor';

export class NoTitleYetPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('title')).getText();
  }

  assertDialogIsDisplayed() {
    expect(element(by.id('cdk-overlay-0')).isDisplayed()).toBeTruthy();
  }

  fillDialogContent(summonerName: string, region: string) {
    element(by.name('summonerName')).sendKeys(summonerName);
    browser.driver.sleep(500);
    element.all(by.css('md-select')).each(function (eachElement) {
      eachElement.click();
      browser.driver.sleep(500);
      element(by.css('md-option[ng-reflect-value="' + region + '"]')).click();
      browser.driver.sleep(500);
      element(by.id("loginBtn")).click();
    });
  }
}
