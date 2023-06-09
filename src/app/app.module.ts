import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RoomsComponent } from './rooms/rooms.component';
//import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
//import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appConfig.service';
import { RequestInterceptor } from './rooms/request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
//import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
//import { RoomAddComponent } from './rooms/room-add/room-add.component';
import { FormsModule } from '@angular/forms';
//import { HoverDirective } from './hover.directive';
import { ImagevalidatorDirective } from './imagevalidator/imagevalidator.directive';
import { RouteConfigToken } from './services/routeConfig.service';
//import { RoomsModule } from './rooms/rooms.module';
//import { HeaderModule } from './header/header.module';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,

    ContainerComponent,
    EmployeeComponent,
    NavbarComponent,
    NotFoundComponent,

    ImagevalidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: RouteConfigToken,
      useValue: { title: 'HOME' },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    //HTTP interceptors will be executed as per the way they are ordered here...

    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
