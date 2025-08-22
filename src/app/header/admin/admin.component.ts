import { Component, Inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers: [UserService]
})
export class AdminComponent {
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';
  userList: boolean = true;

  constructor(@Inject(USER_TOKEN) private userService: UserService) { 

  }

  createUser(){
    this.userList = false;
    this.userService.createUser(this.name, this.gender, this.subType, this.status);
    this.userList = true;
  }
}
