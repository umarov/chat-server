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

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss']
})
export class ChatHomeComponent implements OnInit, OnDestroy, AfterViewInit {
  messages = []
  private socket: WebSocket
  messageListElement: HTMLUListElement
  textInput: HTMLInputElement
  messagesScroll$
  scrollSub: Subscription
  forceScrollOnMessage = true

  @ViewChildren('messagesList') messageLists: QueryList<ElementRef>
  @ViewChildren('textInput') textInputs: QueryList<ElementRef>
  @ViewChildren('mdcTextField') textFieldBoxEls: QueryList<ElementRef>
  @ViewChildren('mdcButton') mdcButtons: QueryList<ElementRef>

  ngOnInit() {
    this.connectToServer()
  }

  ngAfterViewInit() {
    this.messageListElement = this.messageLists.first.nativeElement
    this.textInput = this.textInputs.first.nativeElement
    this.messagesScroll$ = fromEvent(this.messageListElement, 'scroll')
    this.registerScrollListener()

    const textFieldBoxEl = this.textFieldBoxEls.first.nativeElement

    const textField = new MDCTextField(
      textFieldBoxEl,
      /* foundation */ undefined,
      el => new MDCRipple(el)
    )

    const button = new MDCRipple(this.mdcButtons.first.nativeElement)
  }

  ngOnDestroy() {
    this.socket.close()
    this.scrollSub.unsubscribe()
  }

  formSubmit(event) {
    event.preventDefault()
    this.sendMessage()
  }

  sendMessage() {
    const { value } = this.textInput

    if (value) {
      this.socket.send(this.textInput.value)
      this.textInput.value = null
    }
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
      .subscribe(positions => {
        const [first, second] = positions
        console.log(first.sT < second.sT)
        this.forceScrollOnMessage = first.sT < second.sT
      })
  }

  private connectToServer() {
    this.socket = new WebSocket(`ws://mumarov.localhost.run/chat-ws`)
    this.socket.addEventListener('message', wsMessage => {
      setTimeout(() => {
        const data = JSON.parse(wsMessage.data)
        const [id, message] = data
        this.messages.push(`User ${id}: ${message}`)
        this.messageListElement.scrollTop = this.messageListElement.scrollHeight
      }, 0)
    })
  }
}
