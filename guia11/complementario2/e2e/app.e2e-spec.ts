import { Complementario2Page } from './app.po';

describe('complementario2 App', function() {
  let page: Complementario2Page;

  beforeEach(() => {
    page = new Complementario2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
