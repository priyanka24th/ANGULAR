import { Directive,
   ElementRef,
   OnInit,
   Renderer2,
  HostListener,
   HostBinding, 
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.backgroundColor=this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','pink');
  }
  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='pink';
  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','pink');
    this.backgroundColor=this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor=this.defaultColor
  }

 
}
