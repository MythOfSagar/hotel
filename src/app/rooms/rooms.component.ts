import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms';

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
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 13,
    bookedRooms: 8,
  };

  roomList: RoomList[] = [
    {
      type: 'A',
      amenities: 'AC',
      roomNumber:11,
      price: 700,
      photo:
        'https://media.istockphoto.com/id/1227524015/photo/contemporary-interior-design-for-interior-mock-up-in-living-room-scandinavian-home-decor.jpg?s=612x612&w=0&k=20&c=xW4Wlw4fMmoWlX1lWuyYZEyAi1oQN_sz99m3wZBZyOg=',
      checkInTime: new Date('20-June-2022'),
      checkOutTime: new Date('22-June-2022'),
    },
    {
      type: 'B',
      amenities: 'Non AC',
      roomNumber:22,
      price: 900,
      photo:
        'https://media.istockphoto.com/id/1227524015/photo/contemporary-interior-design-for-interior-mock-up-in-living-room-scandinavian-home-decor.jpg?s=612x612&w=0&k=20&c=xW4Wlw4fMmoWlX1lWuyYZEyAi1oQN_sz99m3wZBZyOg=',
      checkInTime: new Date('18-June-2022'),
      checkOutTime: new Date('27-June-2022'),
    },
  ];
}
