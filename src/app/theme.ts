import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Theme {
  readonly backgroundColor = signal('white');

  setBackgroundColor(color: string) {
    this.backgroundColor.set(color);
  }
}
