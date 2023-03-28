import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit ,OnChanges{
  @Input() rooms: RoomList[] = [];
  @Input() title: string= '';

  @Output() selectedRoom = new EventEmitter<RoomList>();


  selectRoom(room:RoomList){
    this.title='Dog'
    this.selectedRoom.emit(room)
  }
 
  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']){
      console.log('Title Has been Changed')
    }
  }
}
