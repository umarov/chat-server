import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { RoutingModule } from './routing.module'
import { LoginComponent } from './login/login.component'
import { ChatHomeComponent } from './chat-home/chat-home.component'
import { AuthService } from './auth.service'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TokenInterceptor } from './token.interceptor'
import { AuthInterceptor } from './auth.interceptor'
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatHomeComponent,
    SignupComponent
  ],
  imports: [BrowserModule, RoutingModule, HttpClientModule],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
