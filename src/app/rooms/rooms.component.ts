import {
  AfterViewInit,
  Component,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { SingleRoom, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements AfterViewInit, OnDestroy {
  hotelName = 'InterPol Hotel';
  numberOfRooms = 70;
  displayRooms = true;
  hideTable = () => {
    this.displayRooms = !this.displayRooms;
  };
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 13,
    bookedRooms: 8,
  };

  selectRoom(room: SingleRoom) {
    console.log(room);
  }

  title = 'Cats';

  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;

  // By Default static is false
  // Static false for asynchromous requests

  //@ViewChild acces only one elemtnt if there are multiple Header components, and that is First One
  //@ViewChildren will have acces to all Header components
  //@ViewChildren will have static as false and it can-not be changed.

  @ViewChildren(HeaderComponent)
  headerChildrenComponents!: QueryList<HeaderComponent>;

  ngAfterViewInit() {
    this.headerComponent.title = 'Changed Title';

    this.headerChildrenComponents.forEach((headerComponent, i) => {
      if (i !== 0) {
        headerComponent.title = `Header Componet ${i}`;
      }
    });
  }

  ngOnDestroy(): void {
    console.log('Room Component has been destroyed');
  }

  roomList: SingleRoom[] = [
    {
      type: 'A',
      amenities: 'ac, washing machine',
      roomNumber: 11,
      rating: 7.3465,
      price: 700,
      photo:
        'https://media.istockphoto.com/id/1227524015/photo/contemporary-interior-design-for-interior-mock-up-in-living-room-scandinavian-home-decor.jpg?s=612x612&w=0&k=20&c=xW4Wlw4fMmoWlX1lWuyYZEyAi1oQN_sz99m3wZBZyOg=',
      checkInTime: new Date('20-June-2022'),
      checkOutTime: new Date('22-June-2022'),
    },
    {
      type: 'B',
      amenities: 'non ac, television',
      roomNumber: 22,
      rating: 7.5765,
      price: 900,
      photo:
        'https://media.istockphoto.com/id/1227524015/photo/contemporary-interior-design-for-interior-mock-up-in-living-room-scandinavian-home-decor.jpg?s=612x612&w=0&k=20&c=xW4Wlw4fMmoWlX1lWuyYZEyAi1oQN_sz99m3wZBZyOg=',
      checkInTime: new Date('18-June-2022'),
      checkOutTime: new Date('27-June-2022'),
    },
  ];

  addRoom() {
    console.log('adding room');
    const newRoom: SingleRoom = {
      type: 'B',
      amenities: 'non ac, television',
      roomNumber: 22,
      rating: 7.5765,
      price: 900,
      photo:
        'https://media.istockphoto.com/id/1227524015/photo/contemporary-interior-design-for-interior-mock-up-in-living-room-scandinavian-home-decor.jpg?s=612x612&w=0&k=20&c=xW4Wlw4fMmoWlX1lWuyYZEyAi1oQN_sz99m3wZBZyOg=',
      checkInTime: new Date('18-June-2022'),
      checkOutTime: new Date('27-June-2022'),
    };

    //this.roomList.push(newRoom) means mutable
    this.roomList = [...this.roomList, newRoom]; //immutable
  }
}
