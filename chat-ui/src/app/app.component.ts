import { Component, ViewChildren, QueryList } from '@angular/core';
import { OnInit, OnDestroy, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}

