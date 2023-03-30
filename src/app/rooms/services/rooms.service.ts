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
    console.log('url', this.config.apiEndPoint);

    //Accessing url from a Value Provider..
  }

  roomList: SingleRoom[] = [];

  getRooms() {
    return this.http.get<SingleRoom[]>(`${this.config.apiEndPoint}/hotels`);
  }

  addRoom(room: SingleRoom) {
    return this.http.post<void>(
      '${this.config.apiEndPoint}/hotels',
      room,
      httpOptions
    );
  }

  editRoom(id: string,editedData:any) {
    
    return this.http.patch<void>(
      `${this.config.apiEndPoint}/hotels/${id}`,
      editedData,
      httpOptions
    );
  }

  deleteRoom(id: string) {
    
    return this.http.delete<void>(
      `${this.config.apiEndPoint}/hotels/${id}`,
      httpOptions
    );
  }

}
