import {
  HttpInterceptor,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http'

import { Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { tap } from 'rxjs/operators/tap'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  TOKEN_KEY = 'ws-chat-server-token'
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.body.token) {
            const token = event.body.token
            localStorage.setItem(this.TOKEN_KEY, token)
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login'])
            }
          }
        }
      )
    )
  }
}
