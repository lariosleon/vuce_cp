import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {RolServiceService} from "../src/app/services/rol-service.service";
import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

// @ts-ignore
bootstrapApplication(AppComponent, appConfig, RolServiceService)
  .catch((err) => console.error(err));
