import { InvestigatorFax }      from './fax';
import {Http, RequestOptions}   from '@angular/http';
import { Injectable }           from '@angular/core';
import {Headers}                from '@angular/http';
import {Observable}             from 'rxjs/Observable';
import {Globals}                from '../globals';

@Injectable()
export class InvestigatorFaxService {
  private investigatorFaxAdminUrl = this.globals.API_URL + '/admin/investigatorFax';
  private investigatorFaxUrl = this.globals.API_URL + '/investigatorFax';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<InvestigatorFax[]> {
    const options = new RequestOptions();
    const url = `${this.investigatorFaxUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as InvestigatorFax[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<InvestigatorFax> {
    const options = new RequestOptions();
    const url = `${this.investigatorFaxUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as InvestigatorFax)
      .catch(this.handleError);
  }

  create(investigatorFax: InvestigatorFax): Observable<InvestigatorFax> {
    const options = new RequestOptions();
    const url = `${this.investigatorFaxAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(investigatorFax), options)
      .map(response => response.json() as InvestigatorFax)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(investigatorFax: InvestigatorFax): Observable<InvestigatorFax> {
    const options = new RequestOptions();
    const url = `${this.investigatorFaxAdminUrl}/${investigatorFax.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(investigatorFax), options)
      .map(response => response.json() as InvestigatorFax)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.investigatorFaxUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
