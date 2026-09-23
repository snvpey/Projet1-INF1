import { Component, signal } from '@angular/core';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import { Home } from './home/home';
import { NgClass } from '@angular/common';

@Component({
  imports: [Header, Footer, Home, NgClass],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly backgroundColor = signal('white');
}
