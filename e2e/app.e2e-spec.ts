import { AppPage } from './app.po';

describe('statement-frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Rabobank Customer Statement Processor');
  });
});
