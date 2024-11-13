import { APP_BASE_HREF } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgZone, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CustomTranslateLoader, VuceMissingTranslationHandler } from "@transversal-vuce/translate";
import {
  getSingleSpaExtraProviders,
  singleSpaAngular,
} from "single-spa-angular";
import { AppComponent } from "./app/app.component";
import { environment } from "./environments/environment";
import { singleSpaPropsSubject } from "./single-spa/single-spa-props";

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        getSingleSpaExtraProviders(),
        importProvidersFrom(
          HttpClientModule,
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: (http: HttpClient) =>
                new CustomTranslateLoader(http, environment.lang_api + "/lang"),
              deps: [HttpClient],
            },
            missingTranslationHandler: {
              provide: MissingTranslationHandler,
              useClass: VuceMissingTranslationHandler,
            },
          })
        ),
      ],
    });
  },
  template: "<vuce-header />",
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
