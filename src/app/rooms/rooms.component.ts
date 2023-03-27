import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'InterPol Hotel';
  numberOfRooms = 70;
  displayRooms = false;
  hideRoomCount = () => {
    this.displayRooms = !this.displayRooms;
  };
}
