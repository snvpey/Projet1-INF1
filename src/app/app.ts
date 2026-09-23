import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import { Theme } from './theme';

@Component({
  imports: [RouterOutlet, Header,Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('alexis-imad-TP1');
  protected readonly theme = inject(Theme);
}
