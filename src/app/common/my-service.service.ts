import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  myServiceData$ = new BehaviorSubject('Hello world.');
  constructor() {}
}
