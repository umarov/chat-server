import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators/tap'
import { User } from './user'
import { environment } from '../environments/environment'

@Injectable()
export class AuthService {
  USER_NAME_KEY = 'ws-chat-server-user-name'
  TOKEN_KEY = 'ws-chat-server-token'
  get baseUrl() {
    return `${environment.production ? 'https' : 'http'}://${environment.backendUrl}`
  }

  constructor(private http: HttpClient, private router: Router) {}

  getUserName() {
    return localStorage.getItem(this.USER_NAME_KEY)
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  hasAuth() {
    const userName = this.getUserName()
    const token = this.getToken()

    return userName !== null && token !== null
  }

  storeUserName(userName: string) {
    localStorage.setItem(this.USER_NAME_KEY, userName)
  }

  storeToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token)
  }

  login({ userName, password }: User) {
    return this.http
      .post<User>(
        `${this.baseUrl}/api/auth`,
        { userName, password }
      )
      .pipe(
        tap(response => {
          this.storeUserName(response.userName)
          return response
        })
      )
  }

  signup({ userName, password, firstName, lastName }: User) {
    return this.http.post<User>(`${this.baseUrl}/api/users`, {
      firstName,
      lastName,
      userName,
      password,
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
