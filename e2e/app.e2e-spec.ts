import { AppPage } from './app.po';

describe('statement-frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display title message', () => {
    expect(page.getDivText()).toEqual('Rabobank Customer Statement Processor');
  });
  it('should display output table', () => {
    expect(page.getOutput()).toContain('Table 2. Failded records');
  });
  it('should display Messages block', () => {
    expect(page.getMessage()).toEqual('Messages');
  });
});
