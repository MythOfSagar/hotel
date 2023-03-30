import { Injectable } from '@angular/core';
import { SingleRoom } from '../rooms';

@Injectable({
  providedIn: 'root'
})

// providedIn: 'root' It provides single instance of Service across all Components.

export class RoomsService {

  constructor() { }

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

  getRooms(){
    return this.roomList
  }
}
