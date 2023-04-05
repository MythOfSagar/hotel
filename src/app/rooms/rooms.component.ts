import { HttpEventType } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { catchError, map, Subject, Subscription } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { HeaderComponent } from '../header/header.component';
import { SingleRoom, Rooms } from './rooms';
import { RoomsService } from './services/rooms.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit, AfterViewInit, OnDestroy {
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

  roomList: SingleRoom[] = [];

  subscription!: Subscription;

  totalBytes: number = 0;

  roomsCount$ = this.roomsService.getRooms$.pipe(map((rooms) => rooms.length));
  //Modified data using rxjs Map operators...

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      this.error$.next(err.message);
      // Error Handling Must not be done in component for better Performance
      // Error Handling Should be done through Service

      console.log(err, 'Error catch through catchError Operator');

      return [];
    })
  );
  // Because of  this way, the manual subscription, unsubscription get's automated

  constructor(
    private roomsService: RoomsService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request Made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success');
          break;
        }

        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          console.log(`Bytes Downloaded: ${this.totalBytes}`);
          break;
        }

        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
        default: {
          console.log(true);
        }
      }
    });

    //Holding subscription for getting Rooms...

    // this.subscription=this.roomsService.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    // });

    // Here the subscription is made manually and also manually UnSubscribed...
  }

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
    // if(this.subscription)
    // {
    //   this.subscription.unsubscribe()
    // }
    //
    //Commented above 5 line's of code because subscription, and Unsubscription
    // has been made automated by using AsyncPipes
  }

  addRoom() {
    const newRoom: SingleRoom = {
      id: uuid(),
      type: 'B',
      amenities: 'non ac, television',
      roomNumber: 22,
      rating: 7.5765,
      price: 900,
      photo:
        'https://media.istockphoto.com/id/1227524015/photo/contemporary-interior-design-for-interior-mock-up-in-living-room-scandinavian-home-decor.jpg?s=612x612&w=0&k=20&c=xW4Wlw4fMmoWlX1lWuyYZEyAi1oQN_sz99m3wZBZyOg=',
      checkInTime: '18-June-2022',
      checkOutTime: '27-June-2022',
    };

    this.roomsService.addRoom(newRoom).subscribe((data) => {
      console.log(data);
    });
    this.roomList = [...this.roomList, newRoom];
  }

  editRoom(id: string) {
    const editedData = {
      type: 'Edited',
      amenities: 'Edited',
      roomNumber: 39,
      rating: 7.5765,
      price: 900,
      photo:
        'https://media.istockphoto.com/id/1227524015/photo/contemporary-interior-design-for-interior-mock-up-in-living-room-scandinavian-home-decor.jpg?s=612x612&w=0&k=20&c=xW4Wlw4fMmoWlX1lWuyYZEyAi1oQN_sz99m3wZBZyOg=',
      checkInTime: '18-June-2022',
      checkOutTime: '27-June-2022',
    };

    this.roomList = this.roomList.map((room) => {
      if (id === room.id) {
        return { ...room, ...editedData };
      }
      return room;
    });

    this.roomsService.editRoom(id, editedData).subscribe((data) => {
      console.log(data);
    });
  }

  deleteRoom(id: string) {
    this.roomList = this.roomList.filter((room) => room.id !== id);

    this.roomsService.deleteRoom(id).subscribe((data) => {
      console.log(data);
    });
  }
}
