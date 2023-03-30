import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig.service';
import { HttpHeaders } from '@angular/common/http';
import { SingleRoom } from '../rooms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})

// providedIn: 'root' It provides single instance of Service across all Components.
export class RoomsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log('url', this.config);

    //Accessing url from a Value Provider..
  }

  roomList: SingleRoom[] = [];

  getRooms() {
    return this.http.get<SingleRoom[]>('https://data-vercel.vercel.app/hotels');
  }

  addRoom(room: SingleRoom) {
    return this.http.post<void>(
      'https://data-vercel.vercel.app/hotels',
      room,
      httpOptions
    );
  }

  editRoom(id: string,editedData:any) {
    
    return this.http.patch<void>(
      `https://data-vercel.vercel.app/hotels/${id}`,
      editedData,
      httpOptions
    );
  }

  deleteRoom(id: string) {
    
    return this.http.delete<void>(
      `https://data-vercel.vercel.app/hotels/${id}`,
      httpOptions
    );
  }

}
