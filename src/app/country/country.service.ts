import { Country }         from './country';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class CountryService {
  private countryAdminUrl = this.globals.API_URL + '/admin/country';
  private countryUrl = this.globals.API_URL + '/country';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Country[]> {
    const options = new RequestOptions();
    const url = `${this.countryUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Country[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Country> {
    const options = new RequestOptions();
    const url = `${this.countryUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Country)
      .catch(this.handleError);
  }

  create(country: Country): Observable<Country> {
    const options = new RequestOptions();
    const url = `${this.countryAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(country), options)
      .map(response => response.json() as Country)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(country: Country): Observable<Country> {
    const options = new RequestOptions();
    const url = `${this.countryAdminUrl}/${country.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(country), options)
      .map(response => response.json() as Country)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.countryUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
