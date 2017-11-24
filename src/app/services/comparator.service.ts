import { Comparator }         from '../domain/comparator';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class ComparatorService {
  private comparatorAdminUrl = this.globals.API_URL + '/admin/comparator';
  private comparatorUrl = this.globals.API_URL + '/comparator';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Comparator[]> {
    const options = new RequestOptions();
    const url = `${this.comparatorUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Comparator[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Comparator> {
    const options = new RequestOptions();
    const url = `${this.comparatorUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Comparator)
      .catch(this.handleError);
  }

  create(comparator: Comparator): Observable<Comparator> {
    const options = new RequestOptions();
    const url = `${this.comparatorAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(comparator), options)
      .map(response => response.json() as Comparator)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(comparator: Comparator): Observable<Comparator> {
    const options = new RequestOptions();
    const url = `${this.comparatorAdminUrl}/${comparator.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(comparator), options)
      .map(response => response.json() as Comparator)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.comparatorUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
