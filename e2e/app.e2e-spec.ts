import { AmbassadeurAppPage } from './app.po';

describe('ambassadeur-app App', () => {
  let page: AmbassadeurAppPage;

  beforeEach(() => {
    page = new AmbassadeurAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
