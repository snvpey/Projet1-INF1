import { Component, inject } from '@angular/core';
import { Square } from '../square/square';
import { Theme } from '../theme';

@Component({
  imports: [Square],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly theme = inject(Theme);
}
