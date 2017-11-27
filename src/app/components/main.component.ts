


import {Component} from '@angular/core';
import {MenuService} from '../services/menu.service';
import {Menu} from '../domain/menu';
import {Section} from '../domain/section';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-home',
  templateUrl: '../html/main.component.html',
  providers: [MenuService]
})
export class MainComponent {
  title = 'Main';
  content = 'Main page';
  menu: Menu;
  menus: Array<Menu>;
  sections: Array<Section>;
  section: Section;

  constructor(
    private router: Router,
    private menuService: MenuService ) {}

  getMenus(): void {
    // this.menuService.getAll().subscribe(menus => this.menus = menus);
    this.menus = this.menuService.getMockMenus();
  }

  ngOnInit() {
    this.getMenus();
  }

  openMenu(menu: Menu) {
    console.log('HELLO');
  }

}
