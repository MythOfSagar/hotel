import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = '';
  constructor() {}

  @ViewChild('headerEl', { static: true }) headerEl!: ElementRef;
  ngOnInit(): void {
    this.headerEl.nativeElement.innerText = 'Element Acces using # i.e. Template Reference';
  }
}
