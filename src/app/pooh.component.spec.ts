import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PoohAppComponent } from '../app/pooh.component';

beforeEachProviders(() => [PoohAppComponent]);

describe('App: Pooh', () => {
  it('should create the app',
      inject([PoohAppComponent], (app: PoohAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pooh works!\'',
      inject([PoohAppComponent], (app: PoohAppComponent) => {
    expect(app.title).toEqual('pooh works!');
  }));
});
