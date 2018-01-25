import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  TOKEN_KEY = 'ws-chat-server-token'

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(this.TOKEN_KEY)
    if (token) {
      const authReq = request.clone({ setHeaders: { authorization: token } })
      return next.handle(authReq)
    } else {
      return next.handle(request)
    }
  }
}
