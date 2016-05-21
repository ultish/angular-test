export class PoohPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pooh-app h1')).getText();
  }
}
