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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChildren('usernameTextField') usernameTextFieldElm: QueryList<ElementRef>
  @ViewChildren('passwordTextField') passwordTextFieldElm: QueryList<ElementRef>
  @ViewChildren('loginButton') loginButtonElm: QueryList<ElementRef>

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    new MDCTextField(
      this.usernameTextFieldElm.first.nativeElement,
      /* foundation */ undefined,
      el => new MDCRipple(el)
    )

    new MDCTextField(
      this.passwordTextFieldElm.first.nativeElement,
      /* foundation */ undefined,
      el => new MDCRipple(el)
    )

    const button = new MDCRipple(this.loginButtonElm.first.nativeElement)

  }

  login() {

  }
}
