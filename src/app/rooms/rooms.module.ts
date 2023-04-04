import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { HoverDirective } from '../hover.directive';
//import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomAddComponent,
    HoverDirective
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule, HeaderModule],
})
export class RoomsModule {}
