import { browser, element, by } from 'protractor';

export class NoTitleYetPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('title')).getText();
  }
}
