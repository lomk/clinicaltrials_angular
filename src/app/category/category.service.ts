
import {Http, RequestOptions}   from '@angular/http';
import { Injectable }           from '@angular/core';
import {Headers}                from '@angular/http';
import {Observable}             from 'rxjs/Observable';
import {Globals}                from '../globals';
import {Category} from './category';

@Injectable()
export class CategoryService {
  private categoryAdminUrl = this.globals.API_URL + '/admin/category';
  private categoryUrl = this.globals.API_URL + '/category';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(): Observable<Category[]> {
    const options = new RequestOptions();
    const url = `${this.categoryUrl}?page=0`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Category[])
      .catch(this.handleError);
  }

  getByUrl(name: String){
    const options = new RequestOptions();
    const url = `${this.categoryUrl}?url=${name}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Category)
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Category> {
    const options = new RequestOptions();
    const url = `${this.categoryUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Category)
      .catch(this.handleError);
  }

  create(category: Category): Observable<Category> {
    const options = new RequestOptions();
    const url = `${this.categoryAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(category), options)
      .map(response => response.json() as Category)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(category: Category): Observable<Category> {
    const options = new RequestOptions();
    const url = `${this.categoryAdminUrl}/${category.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(category), options)
      .map(response => response.json() as Category)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.categoryUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
