export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  type: string;
  amenities: string;
  roomNumber:number;
  price: number;
  photo: string;
  checkInTime:Date;
  checkOutTime:Date;
}
