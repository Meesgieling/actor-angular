import { RxjsWorkshopInschrijfappPage } from './app.po';

describe('rxjs-workshop-inschrijfapp App', () => {
  let page: RxjsWorkshopInschrijfappPage;

  beforeEach(() => {
    page = new RxjsWorkshopInschrijfappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
