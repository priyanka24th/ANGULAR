import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

 numbers =[1,2,3,4]
  allowNewServer = false;
  serverCreationStatus = 'No server Was created!!'
  serverName ='TestServer';
  serverStatus = false;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
   }
   onCreateServer(){
     this.serverCreationStatus = 'server with Id 2407 was created'
     this.serverStatus = true;
   }
   updateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(this.serverName)
   }
   
 
  ngOnInit(): void {
  }

}
