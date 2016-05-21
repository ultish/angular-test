import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PoohAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire,
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(PoohAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://pooh-8d41c.firebaseio.com/'), firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  }),
  
]);

