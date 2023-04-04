import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
//import { RoomAddComponent } from './rooms/room-add/room-add.component';


const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
 
  {path:'',redirectTo:'/rooms',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
