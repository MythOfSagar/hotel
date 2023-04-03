import { Component, OnInit } from '@angular/core';
import { SingleRoom } from '../rooms';
import { v4 as uuid } from 'uuid';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css'],
})
export class RoomAddComponent implements OnInit {

 
  room: SingleRoom = {
    id:uuid(),
    type: '',
    amenities: '',
    roomNumber: 0,
    rating: 1,
    price: 0,
    photo: '',
    checkInTime: '',
    checkOutTime: '',
  }

  ngOnInit(): void {
    
  }

 constructor(private roomsService: RoomsService){}

 addRoom(roomsForm:NgForm) {
 console.log(this.room)
  roomsForm.resetForm(this.room)
  this.roomsService.addRoom(this.room).subscribe((data) => {
    console.log(data);
  });
  // this.roomList = [...this.roomList, newRoom];
}
}
