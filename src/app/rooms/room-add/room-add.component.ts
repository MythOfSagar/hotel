import { Component } from '@angular/core';
import { SingleRoom } from '../rooms';
import { v4 as uuid } from 'uuid';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css'],
})
export class RoomAddComponent {
  room: SingleRoom = {
    id: uuid(),
    type: '',
    amenities: '',
    roomNumber: 0,
    rating: 1,
    price: 0,
    photo: '',
    checkInTime: '',
    checkOutTime: '',
  };

  constructor(private roomsService: RoomsService, private route: Router) {}

  addRoom(roomsForm: NgForm) {
    console.log(this.room);
    roomsForm.resetForm(this.room);
    this.roomsService.addRoom(this.room).subscribe((data) => {
      console.log(data);
    
    });
    this.route.navigateByUrl('/employee');
  }
}
