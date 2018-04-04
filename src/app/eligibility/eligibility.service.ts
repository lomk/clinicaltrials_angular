import { Eligibility }         from './eligibility';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class EligibilityService {
  private eligibilityAdminUrl = this.globals.API_URL + '/admin/eligibility';
  private eligibilityUrl = this.globals.API_URL + '/eligibility';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Eligibility[]> {
    const options = new RequestOptions();
    const url = `${this.eligibilityUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Eligibility[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Eligibility> {
    const options = new RequestOptions();
    const url = `${this.eligibilityUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Eligibility)
      .catch(this.handleError);
  }

  create(eligibility: Eligibility): Observable<Eligibility> {
    const options = new RequestOptions();
    const url = `${this.eligibilityAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(eligibility), options)
      .map(response => response.json() as Eligibility)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(eligibility: Eligibility): Observable<Eligibility> {
    const options = new RequestOptions();
    const url = `${this.eligibilityAdminUrl}/${eligibility.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(eligibility), options)
      .map(response => response.json() as Eligibility)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.eligibilityUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
