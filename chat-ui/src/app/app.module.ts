import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { ChatHomeComponent } from './chat-home/chat-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatHomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
