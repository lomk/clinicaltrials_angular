import { Menu }         from '../domain/menu';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

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

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
