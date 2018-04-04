import { CroUkraine }         from '../cro-ukraine/cro-ukraine';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class CroUkraineService {
  private croUkraineAdminUrl = this.globals.API_URL + '/admin/croUkraine';
  private croUkraineUrl = this.globals.API_URL + '/croUkraine';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<CroUkraine[]> {
    const options = new RequestOptions();
    const url = `${this.croUkraineUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as CroUkraine[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<CroUkraine> {
    const options = new RequestOptions();
    const url = `${this.croUkraineUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as CroUkraine)
      .catch(this.handleError);
  }

  create(croUkraine: CroUkraine): Observable<CroUkraine> {
    const options = new RequestOptions();
    const url = `${this.croUkraineAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(croUkraine), options)
      .map(response => response.json() as CroUkraine)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(croUkraine: CroUkraine): Observable<CroUkraine> {
    const options = new RequestOptions();
    const url = `${this.croUkraineAdminUrl}/${croUkraine.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(croUkraine), options)
      .map(response => response.json() as CroUkraine)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.croUkraineUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
