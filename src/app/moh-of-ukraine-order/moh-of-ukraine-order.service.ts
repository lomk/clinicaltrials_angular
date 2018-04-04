import { MohOfUkraineOrder }         from './moh-of-ukraine-order';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class MohOfUkraineOrderService {
  private mohOfUkraineOrderAdminUrl = this.globals.API_URL + '/admin/mohOfUkraineOrder';
  private mohOfUkraineOrderUrl = this.globals.API_URL + '/mohOfUkraineOrder';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<MohOfUkraineOrder[]> {
    const options = new RequestOptions();
    const url = `${this.mohOfUkraineOrderUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MohOfUkraineOrder[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<MohOfUkraineOrder> {
    const options = new RequestOptions();
    const url = `${this.mohOfUkraineOrderUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MohOfUkraineOrder)
      .catch(this.handleError);
  }

  create(mohOfUkraineOrder: MohOfUkraineOrder): Observable<MohOfUkraineOrder> {
    const options = new RequestOptions();
    const url = `${this.mohOfUkraineOrderAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(mohOfUkraineOrder), options)
      .map(response => response.json() as MohOfUkraineOrder)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(mohOfUkraineOrder: MohOfUkraineOrder): Observable<MohOfUkraineOrder> {
    const options = new RequestOptions();
    const url = `${this.mohOfUkraineOrderAdminUrl}/${mohOfUkraineOrder.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(mohOfUkraineOrder), options)
      .map(response => response.json() as MohOfUkraineOrder)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.mohOfUkraineOrderUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
