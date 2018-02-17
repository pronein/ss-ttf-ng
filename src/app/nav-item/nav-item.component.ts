import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input()
  item: MenuItem;

  constructor() {
  }

  ngOnInit() {
  }

  isContainer() {
    return this.item.subItems.length > 0;
  }

}
