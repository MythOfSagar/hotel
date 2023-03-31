import { HttpClient, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appConfig.service';
import { HttpHeaders } from '@angular/common/http';
import { SingleRoom } from '../rooms';
import { shareReplay } from 'rxjs';

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

  getRooms$ = this.http
    .get<SingleRoom[]>(`${this.config.apiEndPoint}/hotels`)
    .pipe(shareReplay(1));

    //By using getRooms$ instead of getRooms we can avoid repeatative API calls for same Data...

  getRooms() {
    return this.http.get<SingleRoom[]>(`${this.config.apiEndPoint}/hotels`);
  }

  addRoom(room: SingleRoom) {
    return this.http.post<void>(
      `${this.config.apiEndPoint}/hotels`,
      room,
      httpOptions
    );
  }

  editRoom(id: string, editedData: any) {
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

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );

    return this.http.request(request);
  }
}
