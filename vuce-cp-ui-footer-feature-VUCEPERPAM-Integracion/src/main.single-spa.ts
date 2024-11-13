import { NgZone } from '@angular/core';
import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        getSingleSpaExtraProviders(),
      ],
    });
  },
  template: '<vuce-footer />',
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
