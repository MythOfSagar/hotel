import { InjectionToken } from "@angular/core";

export const localStorageToken=new InjectionToken<any>('local storage',{
    providedIn:'root' , //if no component is using this token, then will be removed during Production.
    factory(){
        return localStorage
    }
})