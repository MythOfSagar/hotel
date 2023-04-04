import { Component, Self } from '@angular/core';
import { SingleRoom } from '../rooms/rooms';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService], //Another instance of RoomsService is getting created.
})
export class EmployeeComponent {
  empName: string = 'Sagar';

  roomList: SingleRoom[] = [];

  constructor(@Self() private roomsService: RoomsService) {}

  // @Self Decorator means the componet wants it's own instance of RoomService and not Global Instance.

  // @SkipSelf Decorator means skip Self from checking for own Service Instance.

  // @Optional Decorator for a service means it will not throw 'Service not found Error',
  // because that service has been marked as optional.

  // @Host Decorator means the creation of instance for parent which will be
  // further used by the childs...
}
