import { Complementario1Page } from './app.po';

describe('complementario1 App', function() {
  let page: Complementario1Page;

  beforeEach(() => {
    page = new Complementario1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
