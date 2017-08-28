import { FamiliadaPage } from './app.po';

describe('familiada App', () => {
  let page: FamiliadaPage;

  beforeEach(() => {
    page = new FamiliadaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
