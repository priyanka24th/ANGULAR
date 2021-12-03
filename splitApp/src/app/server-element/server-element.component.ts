import { Component,
   Input,
    OnInit,
     ViewEncapsulation,
     OnChanges, 
     SimpleChange,
     
     DoCheck,
     AfterContentInit,
     AfterContentChecked,
     ViewChild,
     ElementRef,
     ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked {
  @Input('srvEelemnt') element :{type:string,name:string,content:string}
  @Input() name :string
  @ViewChild('heading',{static:true}) header:ElementRef
  @ContentChild('contentParagraph',{static:true}) pararaph:ElementRef

  constructor() {
    console.log('Constructor called!')
   }

  ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log('Text-->',this.header.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log('ng Do check called')
    console.log('Text-->',this.header.nativeElement.textContent);
  }
  ngOnChanges(changes:SimpleChange){
    console.log('ngOnChanges Called',changes)
    console.log('Text-->',this.header.nativeElement.textContent);
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called ')
    console.log('Text-->',this.header.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
    console.log('Text-->',this.header.nativeElement.textContent);
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called ')
    console.log('Text-->',this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
    console.log('Text-->',this.header.nativeElement.textContent);
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called')
    console.log('Text-->',this.header.nativeElement.textContent);
  }
  
  

}
