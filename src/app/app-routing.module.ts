import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
//import { RoomAddComponent } from './rooms/room-add/room-add.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
      //Lazy loading done here...
  },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },

  //We can also do lazy loading of component when we introduced that component in our code itself...
  //here is the command...
  //ng g m booking --route=booking --routing --module=app
  //--route=booking means route endPoint
  //--module=app means from app module we want to lazyLoad it...

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
