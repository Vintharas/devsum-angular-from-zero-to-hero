import { DevsumAngularFromZeroToHeroPage } from './app.po';

describe('devsum-angular-from-zero-to-hero App', () => {
  let page: DevsumAngularFromZeroToHeroPage;

  beforeEach(() => {
    page = new DevsumAngularFromZeroToHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
