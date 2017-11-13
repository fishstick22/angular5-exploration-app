import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UserService }       from '../model/user.service';

@Component({
  selector: 'app-welcome',
  template: '<h3 class="welcome" ><i>{{welcome}}</i></h3>',
  // templateUrl: './welcome.component.html',
  // styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent implements OnInit {

  welcome = '-- not initialized yet --';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ?
      'Welcome, ' + this.userService.user.name :
      'Please log in.';
  }

}
