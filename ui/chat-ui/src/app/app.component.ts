import { Component, ViewChildren, QueryList } from '@angular/core';
import { OnInit, OnDestroy, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { filter } from 'rxjs/operators/filter'
import { pairwise } from 'rxjs/operators/pairwise'
import { map } from 'rxjs/operators/map'
import { debounceTime } from 'rxjs/operators/debounceTime'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  template: `
    <div class="chat-ui">
      <ul #messagesList class="messages-list mdc-list bordered-list">
        <li class="mdc-list-item" *ngFor="let message of messages">
          {{ message }}
        </li>
      </ul>

      <div class="message-input">
        <form (submit)="formSubmit($event)" class="mdc-text-field" #mdcTextField>
          <input type="text" id="my-text-field" class="mdc-text-field__input" #textInput autofocus="true" autocomplete="off">
          <label class="mdc-text-field__label" for="my-text-field">Type your message</label>
          <div class="mdc-text-field__bottom-line"></div>
        </form>
        <button class="mdc-button mdc-button--raised" #mdcButton (click)="sendMessage()">
          Send
        </button>
      </div>
    </div>
  `,
  styles: [`
    .chat-ui {
      height: 100vh;
      display: grid;
      grid-template-rows: 1fr 0fr;
    }

    .message-input {
      border: 1px solid rgba(0, 0, 0, .12);
      display: grid;
      grid-template-columns: 4fr 1fr;
      grid-gap: 8px;
      padding: 8px 8px 0px 8px;
      align-items: center;
    }

    .messages-list {
      background-color: lightgoldenrodyellow;
      overflow-y: scroll;
    }

    .messages-list.mdc-list.bordered-list  {
      padding-top: 0px;
      padding-bottom: 0px;
      font-size: .812rem;
    }

    .bordered-list {
      /* remove the side padding. we'll be placing it around the item instead. */
      padding-right: 0;
      padding-left: 0;
    }
    .bordered-list .mdc-list-item {
      /* Add the list side padding padding to the list item. */
      padding: 0 16px;
      /* Add a border around each element. */
      border: 1px solid rgba(0, 0, 0, .12);
    }
    /* Ensure adjacent borders don't collide with one another. */
    .bordered-list .mdc-list-item:not(:first-child) {
      border-top: none;
    }

  `]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  messages = [];
  private socket: WebSocket;
  messageListElement: HTMLUListElement;
  textInput: HTMLInputElement;
  messagesScroll$;
  scrollSub: Subscription;
  forceScrollOnMessage = true;

  @ViewChildren("messagesList") messageLists: QueryList<ElementRef>
  @ViewChildren("textInput") textInputs: QueryList<ElementRef>
  @ViewChildren("mdcTextField") textFieldBoxEls: QueryList<ElementRef>
  @ViewChildren("mdcButton") mdcButtons: QueryList<ElementRef>;

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
    );

    const button = new MDCRipple(this.mdcButtons.first.nativeElement)
  }

  ngOnDestroy() {
    this.socket.close();
    this.scrollSub.unsubscribe();
  }

  formSubmit(event) {
    event.preventDefault()
    this.sendMessage()
  }

  sendMessage() {
    const { value } = this.textInput

    if (value) {
      this.socket.send(this.textInput.value);
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
      ).subscribe((positions) => {
        const [first, second] = positions
        console.log(first.sT < second.sT);
        this.forceScrollOnMessage = first.sT < second.sT;
      })
  }

  private connectToServer() {
    this.socket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}/chat-ws`);
    this.socket.addEventListener('message', (wsMessage) => {
      setTimeout(() => {
        const data = JSON.parse(wsMessage.data);
        const [id, message] = data;
        this.messages.push(`User ${id}: ${message}`);
        this.messageListElement.scrollTop = this.messageListElement.scrollHeight
      }, 0)
    });
  }
}

