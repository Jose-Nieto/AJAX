import { AngularGuia11Page } from './app.po';

describe('angular-guia11 App', function() {
  let page: AngularGuia11Page;

  beforeEach(() => {
    page = new AngularGuia11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
