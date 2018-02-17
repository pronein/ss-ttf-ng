import {Component, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  title = 'Time To Fish';
  menu: MenuItem[];

  constructor(private menuService: MenuService) {
  }

  getMenu(): void {
    this.menuService.getMenu()
      .subscribe(menu => this.menu = menu);
  }

  ngOnInit() {
    this.getMenu();
  }

}
