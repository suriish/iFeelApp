import { IfeelPage } from './app.po';

describe('ifeel App', () => {
  let page: IfeelPage;

  beforeEach(() => {
    page = new IfeelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
