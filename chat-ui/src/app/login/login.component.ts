import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList
} from '@angular/core'
import { MDCTextField } from '@material/textfield'
import { MDCRipple } from '@material/ripple'
import { User } from '../user'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import { take } from 'rxjs/operators/take'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChildren('usernameTextField') usernameTextFieldElm: QueryList<ElementRef>
  @ViewChildren('passwordTextField') passwordTextFieldElm: QueryList<ElementRef>

  @ViewChildren('loginButton') loginButtonElm: QueryList<ElementRef>
  @ViewChildren('createAccountButton')
  createAccountButtonElm: QueryList<ElementRef>

  loginCard = true

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.initializeLoginCardElements()
  }

  initializeLoginCardElements() {
    this.initializeTextField(this.usernameTextFieldElm.first.nativeElement)
    this.initializeTextField(this.passwordTextFieldElm.first.nativeElement)

    this.initializeRipple(this.loginButtonElm.first.nativeElement)
    this.initializeRipple(this.createAccountButtonElm.first.nativeElement)
  }

  login() {
    const userName = this.usernameTextFieldElm.first.nativeElement
      .firstElementChild.value
    const password = this.passwordTextFieldElm.first.nativeElement
      .firstElementChild.value
    this.authService
      .login({ userName, password } as User)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigateByUrl('/chat')
      }, console.log)
  }

  showSignUpCard() {
    this.router.navigateByUrl('/signup')
  }

  private initializeTextField(element: HTMLElement) {
    return new MDCTextField(
      element,
      /* foundation */ undefined,
      this.initializeRipple
    )
  }

  private initializeRipple(element: HTMLElement) {
    return new MDCRipple(element)
  }
}
