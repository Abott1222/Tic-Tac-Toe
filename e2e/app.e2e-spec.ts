import { SimpleProjectPage } from './app.po';

describe('simple-project App', () => {
  let page: SimpleProjectPage;

  beforeEach(() => {
    page = new SimpleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
