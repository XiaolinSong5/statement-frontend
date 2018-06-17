import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getDivText() {
    return element(by.css('app-root h1')).getText();
  }
  getOutput() {
    return element(by.css('app-records')).getText();
  }
  getMessage() {
    return element(by.css('app-messages h3')).getText();
  }
}
