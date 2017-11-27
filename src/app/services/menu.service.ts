import { Menu }         from '../domain/menu';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {Section} from '../domain/section';

@Injectable()
export class MenuService {
  private menuAdminUrl = this.globals.API_URL + '/admin/menu';
  private menuUrl = this.globals.API_URL + '/menu';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(): Observable<Menu[]> {
    const options = new RequestOptions();
    const url = `${this.menuUrl}?page=0`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Menu[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Menu> {
    const options = new RequestOptions();
    const url = `${this.menuUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Menu)
      .catch(this.handleError);
  }

  create(menu: Menu): Observable<Menu> {
    const options = new RequestOptions();
    const url = `${this.menuAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(menu), options)
      .map(response => response.json() as Menu)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(menu: Menu): Observable<Menu> {
    const options = new RequestOptions();
    const url = `${this.menuAdminUrl}/${menu.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(menu), options)
      .map(response => response.json() as Menu)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.menuUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  getMockMenus(): Menu[] {
    const menus: Menu[] = [];
    const menu: Menu = new Menu;
    const menu2: Menu = new Menu;
    const menu3: Menu = new Menu;
    const section: Section = new Section;
    const section2: Section = new Section;
    const section3: Section = new Section;
    section.nameEn = 'NAME EN';
    section.nameEn = 'NAME RU';
    section.nameEn = 'NAME UA';
    section2.nameEn = 'NAME EN 2';
    section2.nameEn = 'NAME RU 2';
    section2.nameEn = 'NAME UA 2';
    section3.nameEn = 'NAME EN 3';
    section3.nameEn = 'NAME RU 3';
    section3.nameEn = 'NAME UA 3';
    menu.nameEn = 'NAME EN';
    menu.nameEn = 'NAME RU';
    menu.nameEn = 'NAME UA';
    menu2.nameEn = 'NAME EN 2';
    menu2.nameEn = 'NAME RU 2';
    menu2.nameEn = 'NAME UA 2';
    menu3.nameEn = 'NAME EN 3';
    menu3.nameEn = 'NAME RU 3';
    menu3.nameEn = 'NAME UA 3';
    menu.sections = [];
    menu2.sections = [];
    menu3.sections = [];
    menu.sections.push(section);
    menu.sections.push(section2);
    menu.sections.push(section3);
    menu2.sections.push(section);
    menu2.sections.push(section2);
    menu2.sections.push(section3);
    menu3.sections.push(section);
    menu3.sections.push(section2);
    menu3.sections.push(section3);
    menus.push(menu);
    menus.push(menu2);
    menus.push(menu3);
    return menus;
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
