import {
  Component,
  ViewChildren,
  QueryList,
  ViewChild,
  ElementRef
} from '@angular/core'
import {
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core/src/metadata/lifecycle_hooks'
import { Observable } from 'rxjs/Observable'
import { MDCTextField } from '@material/textfield'
import { MDCRipple } from '@material/ripple'
import { fromEvent } from 'rxjs/observable/fromEvent'
import { filter } from 'rxjs/operators/filter'
import { pairwise } from 'rxjs/operators/pairwise'
import { map } from 'rxjs/operators/map'
import { debounceTime } from 'rxjs/operators/debounceTime'
import { Subscription } from 'rxjs/Subscription'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss']
})
export class ChatHomeComponent implements OnInit, OnDestroy, AfterViewInit {
  messages: any[] = []
  private socket: WebSocket
  messageListElement: HTMLUListElement
  textInput: HTMLInputElement
  messagesScroll$: Observable<any>
  scrollSub: Subscription
  forceScrollOnMessage = true
  get webSocketBaseUrl() {
    return `${environment.production ? 'wss' : 'ws'}://${environment.backendUrl}`
  }

  @ViewChildren('messagesList') messageLists: QueryList<ElementRef>
  @ViewChildren('textInput') textInputs: QueryList<ElementRef>
  @ViewChildren('mdcTextField') textFieldBoxEls: QueryList<ElementRef>
  @ViewChildren('mdcButton') mdcButtons: QueryList<ElementRef>

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.connectToServer()
  }

  ngAfterViewInit() {
    this.messageListElement = this.messageLists.first.nativeElement
    this.textInput = this.textInputs.first.nativeElement
    this.messagesScroll$ = fromEvent(this.messageListElement, 'scroll')
    // this.registerScrollListener()

    const textFieldBoxEl = this.textFieldBoxEls.first.nativeElement

    new MDCTextField(
      textFieldBoxEl,
      /* foundation */ undefined,
      (el: HTMLElement) => new MDCRipple(el)
    )

    new MDCRipple(this.mdcButtons.first.nativeElement)
  }

  ngOnDestroy() {
    this.socket.close()
    // this.scrollSub.unsubscribe()
  }

  formSubmit(event: Event) {
    event.preventDefault()
    this.sendMessage()
  }

  sendMessage() {
    const { value } = this.textInput

    if (value) {
      this.socket.send(this.textInput.value)
      this.textInput.value = ''
    }
  }

  trackByIndex(index: number, _: any) {
    return index
  }

  private registerScrollListener() {
    this.scrollSub = this.messagesScroll$
      .pipe(
        map((e: any) => ({
          sH: e.target.scrollHeight,
          sT: e.target.scrollTop,
          cH: e.target.clientHeight
        })),
        pairwise(),
        debounceTime(500)
      )
      .subscribe((positions: { sT: number; sH: number; cH: number }[]) => {
        const [first, second] = positions
        console.log(first.sT < second.sT)
        this.forceScrollOnMessage = first.sT < second.sT
      })
  }

  private connectToServer() {
    if (this.authService.getToken()) {
      this.socket = new WebSocket(
        `${this.webSocketBaseUrl}/chat?token=${this.authService.getToken()}`
      )
      this.socket.addEventListener('message', wsMessage => {
        const data = JSON.parse(wsMessage.data)
        const { firstName, lastName } = data.user
        this.messages.push(`${firstName} ${lastName}: ${data.content}`)
        setTimeout(() => {
          this.messageListElement.scrollTop = this.messageListElement.scrollHeight
        }, 10)
      })

      this.socket.addEventListener('close', event => {
        console.log(
          'You are not authorized to access chat or the chat server is dead'
        )
        setTimeout(() => {
          this.connectToServer()
        }, 5000);
        // this.router.navigateByUrl('/login')
      })
    } else {
      this.router.navigateByUrl('/login')
    }
  }
}
