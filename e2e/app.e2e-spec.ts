import { NoTitleYetPage } from './app.po';

describe('no-title-yet App', () => {
  let page: NoTitleYetPage;

  beforeEach(() => {
    page = new NoTitleYetPage();
  });

  it('should display message saying app works', () => {

    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Material2 Example App');
  });
});
