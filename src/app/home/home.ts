import { Component, Output, EventEmitter } from '@angular/core';
import { Square } from '../square/square';

@Component({
  imports: [Square],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  @Output() backgroundColorChanged = new EventEmitter<string>();
}
