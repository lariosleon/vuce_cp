import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ReplaySubject } from 'rxjs';
import { AppProps } from 'single-spa';
import { NgZone } from '@angular/core';
import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const singleSpaPropsSubject = new ReplaySubject<AppProps>(1);

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

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Import AppComponent instead of declaring it
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        getSingleSpaExtraProviders(),
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have singleSpaPropsSubject defined", () => {
    expect(singleSpaPropsSubject).toBeDefined();
  });

  it("should have bootstrap function defined", () => {
    expect(bootstrap).toBeDefined();
  });

  it("should have mount function defined", () => {
    expect(mount).toBeDefined();
  });

  it("should have unmount function defined", () => {
    expect(unmount).toBeDefined();
  });

  it("should have appConfig defined", () => {
    expect(appConfig).toBeDefined();
  });

  it("should have routes defined", () => {
    expect(routes).toBeDefined();
  });
});
