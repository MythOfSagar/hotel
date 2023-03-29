export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface SingleRoom {
  type: string;
  amenities: string;
  roomNumber:number;
  rating: number;
  price: number;
  photo: string;
  checkInTime:Date;
  checkOutTime:Date;
}
