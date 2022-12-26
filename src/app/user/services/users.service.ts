import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '@user/models/user.model';

interface ResponseUser {
  results: User[],
  info: any
}

@Injectable()

export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<ResponseUser>('https://randomuser.me/api?results=10')
      .pipe(
        map(response => response.results)
      );
  }
}
