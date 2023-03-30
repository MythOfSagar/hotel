import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/envvironment";
import { AppConfig } from "./appConfig.interface";

export const APP_SERVICE_CONFIG= new InjectionToken<AppConfig>('app.config')

export const APP_CONFIG:AppConfig={
    apiEndPoint:environment.apiEndPoint
}