import { KnigopoiskPage } from './app.po';

describe('knigopoisk App', () => {
  let page: KnigopoiskPage;

  beforeEach(() => {
    page = new KnigopoiskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
