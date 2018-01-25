import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core'
import { MDCTextField } from '@material/textfield'
import { MDCRipple } from '@material/ripple'
import { Router } from '@angular/router'
import { User } from '../user'
import { AuthService } from '../auth.service'
import { take } from 'rxjs/operators/take'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {
  @ViewChildren('usernameTextField') usernameTextFieldElm: QueryList<ElementRef>
  @ViewChildren('passwordTextField') passwordTextFieldElm: QueryList<ElementRef>
  @ViewChildren('firstNameTextField')
  firstNameTextFieldElm: QueryList<ElementRef>
  @ViewChildren('lastNameTextField') lastNameTextFieldElm: QueryList<ElementRef>

  @ViewChildren('signUpButton') signUpButtonElm: QueryList<ElementRef>
  @ViewChildren('backToLoginButton') backToLoginButtonElm: QueryList<ElementRef>

  userNameInput: HTMLInputElement
  passwordInput: HTMLInputElement
  firstNameInput: HTMLInputElement
  lastNameInput: HTMLInputElement

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeSignUpCardElements()
  }

  initializeSignUpCardElements() {
    const usernameTextField = this.usernameTextFieldElm.first.nativeElement
    this.initializeTextField(usernameTextField)
    this.userNameInput = usernameTextField.firstElementChild

    const passwordTextField = this.passwordTextFieldElm.first.nativeElement
    this.initializeTextField(passwordTextField)
    this.passwordInput = passwordTextField.firstElementChild

    const firstNameTextField = this.firstNameTextFieldElm.first.nativeElement
    this.initializeTextField(firstNameTextField)
    this.firstNameInput = firstNameTextField.firstElementChild

    const lastNameTextField = this.lastNameTextFieldElm.first.nativeElement
    this.initializeTextField(lastNameTextField)
    this.lastNameInput = lastNameTextField.firstElementChild

    const signUpButton = this.signUpButtonElm.first.nativeElement
    this.initializeRipple(signUpButton)
  }

  signUp(event: Event) {
    event.preventDefault()
    const user = new User(
      this.userNameInput.value,
      this.passwordInput.value,
      this.firstNameInput.value,
      this.lastNameInput.value
    )

    this.authService
      .signup(user)
      .pipe(take(1))
      .subscribe(() => {
        this.backToLogin()
      })
  }

  backToLogin() {
    this.router.navigateByUrl('/login')
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
