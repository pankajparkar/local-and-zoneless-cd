import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar';

@Component({
  selector: 'lz-root',
  template: `
    <lz-navbar></lz-navbar>
    <h3>App Component CD Counts: {{ count }}</h3>
    <br>

    <router-outlet></router-outlet>
  `,
  imports: [Navbar, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  title = 'local-and-zoneless-cd';
  count = 0;

  ngDoCheck() {
    ++this.count;
  }
}
