import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
 
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userservices:UsersService){
    this.users = userservices.inactiveUsers;
  }
 

 
  onSetToActive(id:number){
    this.userservices.SetToActive(id)
  }
}