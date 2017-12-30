import { Directive , ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appHigh]'
})
export class HighDirective {
  @Input() appHigh: number;
  constructor(public el: ElementRef, public renderer: Renderer)
  {}
ngOnInit()
{
    if(this.appHigh >60)
    {
    this.renderer.setElementStyle( this.el.nativeElement,'backgroundColor','#49c926');
    }
    else
    {
      this.renderer.setElementStyle( this.el.nativeElement,'backgroundColor','#42b0f4');
    }
}
}
