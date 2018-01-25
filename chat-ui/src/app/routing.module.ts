import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { ChatHomeComponent } from './chat-home/chat-home.component'
import { AuthGuard } from './auth.guard'
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'chat',
    component: ChatHomeComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'chat', pathMatch: 'full' }
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [AuthGuard]
})
export class RoutingModule {}
