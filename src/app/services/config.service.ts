import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any'
    //providedIn: 'any', it provides two instances of the Service,
    //One for nonLazy loaded module...
    //Other for Lazy loaded module...
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) { 
    console.log('ConfigService')
    console.log(this.configToken)
  }
}
