import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {

  @Input() appHover:string= '2px solid blue'

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    console.log(element.nativeElement);
  }

 

  ngOnInit(): void {
    this.element.nativeElement.style.border = this.appHover;
    console.log(this.element.nativeElement.style.border);

    this.renderer2.setStyle(
      //Alternate way to managed
      this.element.nativeElement,
      'border',
      this.appHover
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.border = '4px solid red';
  }
}
