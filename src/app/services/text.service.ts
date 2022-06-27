import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  clean(registration: string): string {
    return registration.replace(/\s+/g, '');
  }
}
