import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes,RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoute:Routes=[
  {path:'users',component:UsersComponent,children:
[ {path:':id/:name',component:UserComponent}]},
 
  
  {path:'',component:HomeComponent},
  {path:'servers',component:ServersComponent,children:[
    {path:':id',component:ServerComponent},
  {path:':id/edit',component:EditServerComponent}

  ]},
  {path:'Not-Found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'Not-Found'}
  
]




@NgModule({
 imports:[ RouterModule.forRoot(appRoute)],
 exports:[RouterModule]
})

export class AppRoutingModule { }
