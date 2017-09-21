import { POSPage } from './app.po';

describe('pos App', () => {
  let page: POSPage;

  beforeEach(() => {
    page = new POSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
