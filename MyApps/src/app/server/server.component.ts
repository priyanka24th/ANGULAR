import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId :number = 2407;
  serverStatus :String ='Offline';

  constructor() { 
    this.serverStatus = Math.random()>0.5?'Online':'Offline'
  }
  getcolor(){
    if(this.serverStatus=='Online')
    return 'green';
    return 'red';
  }
  getServerStatus(){
    return this.serverStatus
  }

  ngOnInit(): void {
  }

}
