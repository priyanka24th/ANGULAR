import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
 users: string[];

  constructor(private userservices:UsersService){
    this.users = userservices.activeUsers;
  }
 

  onSetToInactive(id: number) {
    this.userservices.setToInactive(id)
    
  }
 

}
