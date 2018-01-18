import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { ChatHomeComponent } from './chat-home/chat-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: ':username/chat-home', component: ChatHomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
