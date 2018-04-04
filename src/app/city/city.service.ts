import { City }         from './city';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class CityService {
  private cityAdminUrl = this.globals.API_URL + '/admin/city';
  private cityUrl = this.globals.API_URL + '/city';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(): Observable<City[]> {
    const options = new RequestOptions();
    const url = `${this.cityUrl}?page=0`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as City[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<City> {
    const options = new RequestOptions();
    const url = `${this.cityUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as City)
      .catch(this.handleError);
  }

  create(city: City): Observable<City> {
    const options = new RequestOptions();
    const url = `${this.cityAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(city), options)
      .map(response => response.json() as City)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(city: City): Observable<City> {
    const options = new RequestOptions();
    const url = `${this.cityAdminUrl}/${city.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(city), options)
      .map(response => response.json() as City)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.cityUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
