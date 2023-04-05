import {
  AfterViewInit,
  Component,
  Inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { localStorageToken } from './localstorage.token';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'my-app';
  role = 'Admin';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  //AfterViewInit because by default static is false

  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private initService: InitService,
    private configService: ConfigService
  ) {
    console.log(initService.config,this.configService,'configService');
    //Getting Data before the app has been initialized using initService...
  }

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);

    componentRef.instance.numberOfRooms = 177;
    this.localStorage.setItem('NOTE', 'Rooms are available');
    console.log(componentRef.instance, 'v');
  }

  changeRole() {
    this.role = this.role === 'Admin' ? 'User' : 'Admin';
  }
}
