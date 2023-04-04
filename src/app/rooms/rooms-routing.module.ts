import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {
    //path: 'rooms', //For normal loading of Room Module
      path: '',      //For Lazy Loading of Room Module

    component: RoomsComponent,
    //children: [{ path: ':id', component: RoomsBookingComponent }],
    //In above children Array, always keep dynamic routing component at the last,
    //For Nested Routing...
  },
  { path: 'rooms/add', component: RoomAddComponent },
  { path: 'rooms/:id', component: RoomsBookingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
