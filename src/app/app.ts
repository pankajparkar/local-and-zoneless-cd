import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar';
import { CdCounterDirective } from './cd-counter.directive';

@Component({
  selector: 'lz-root',
  hostDirectives: [
    CdCounterDirective,
  ],
  template: `
    <lz-navbar></lz-navbar>
    <br>

    <router-outlet></router-outlet>
  `,
  imports: [Navbar, RouterOutlet],
})
export class App {
  title = 'local-and-zoneless-cd';
  count = 0;

  ngDoCheck() {
    ++this.count;
  }
}
