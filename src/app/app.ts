import { ApplicationRef, Component } from '@angular/core';
import { ParentComponent } from "./parent.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lz-root',
  template: `
    <br>
    <!-- <app-parent /> -->
    <router-outlet></router-outlet>
  `,
  imports: [ParentComponent, RouterOutlet],
})
export class App {
  title = 'local-and-zoneless-cd';
  cdCount = 0;

  constructor(appRef: ApplicationRef) {
    const originalTick = appRef.tick;
    appRef.tick = () => {
      originalTick.apply(appRef);
      console.log(`App Level CD - ${++this.cdCount}`);
    };
  }
}
