import { PoohPage } from './app.po';

describe('pooh App', function() {
  let page: PoohPage;

  beforeEach(() => {
    page = new PoohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pooh works!');
  });
});
