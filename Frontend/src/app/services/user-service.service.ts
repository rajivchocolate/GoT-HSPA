import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  addUser(user: User) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      // ... is a spread operator to allow the array elements to expand
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
