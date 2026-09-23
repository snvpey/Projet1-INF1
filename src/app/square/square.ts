import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-square',
  styleUrl: './square.scss',
  templateUrl: './square.html',
})
export class Square {
  @Input() color = 'black';
  @Output() colorSelected = new EventEmitter<string>();
}
