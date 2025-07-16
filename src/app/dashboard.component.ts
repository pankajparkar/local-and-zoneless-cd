import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'lz-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h3>Demo Links</h3>
    <ul>
      <li>
        <a routerLink="/when-default">ChangeDetectionStrategy - Default</a>
      </li>
      <li>
        <a routerLink="/when-onpush">ChangeDetectionStrategy - OnPush</a>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
})
export class DahboardComponent {

}