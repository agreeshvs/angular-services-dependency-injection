import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // providers: [UserService] // Providing UserService at component level
})
export class UserListComponent {
  userList;

  constructor(private userService: UserService){
    this.userList = this.userService.getAllUsers();
  }
}
