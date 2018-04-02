
import {Component, OnInit} from '@angular/core';
import {MenuService} from './menu.service';
import {Menu} from './menu';
import {Section} from '../section/section';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-home',
  templateUrl: './main.component.html',
  providers: [MenuService]
})
export class MainComponent implements OnInit{
  title = 'Main';
  content = 'Main page';
  selectedMenu: Menu;
  menus: Array<Menu>;
  sections: Section[];


  constructor(
    // private router: Router,
    private menuService: MenuService ) {}

  getMenus(): void {
    // this.menuService.getAll().subscribe(menus => this.menus = menus);
    this.menus = this.menuService.getMockMenus();
  }

  ngOnInit() {
    this.getMenus();
    this.selectedMenu = this.menus[0];
  }

  openMenu(menu: Menu) {
    if (menu.sections) {
      this.selectedMenu = menu;
      this.sections = menu.sections;
      console.log(menu.sections[0].nameEn);
    } else { this.selectedMenu = null; }

    return false;
  }

}
