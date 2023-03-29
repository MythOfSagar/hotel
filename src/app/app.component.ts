import { AfterViewInit, Component,  ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    
    componentRef.instance.numberOfRooms=177


    console.log(componentRef.instance,'v')
  }

  changeRole() {
    this.role = this.role === 'Admin' ? 'User' : 'Admin';
  }
}
