import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-square',
  styleUrl: './square.scss',
  templateUrl: './square.html',
})
export class Square {
  @Input() color = '';
  @Output() colorSelected = new EventEmitter<string>();
}
