import {Injectable} from '@angular/core';
import {MenuItem} from './menu-item';
import {MENU} from './mock-menu';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MenuService {

  constructor() {
  }

  getMenu(): Observable<MenuItem[]> {
    return of(MENU);
  }
}
