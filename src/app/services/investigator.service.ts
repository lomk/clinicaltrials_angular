import { Investigator }         from '../domain/investigator';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class InvestigatorService {
  private investigatorAdminUrl = this.globals.API_URL + '/admin/investigator';
  private investigatorUrl = this.globals.API_URL + '/investigator';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Investigator[]> {
    const options = new RequestOptions();
    const url = `${this.investigatorUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Investigator[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Investigator> {
    const options = new RequestOptions();
    const url = `${this.investigatorUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Investigator)
      .catch(this.handleError);
  }

  create(investigator: Investigator): Observable<Investigator> {
    const options = new RequestOptions();
    const url = `${this.investigatorAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(investigator), options)
      .map(response => response.json() as Investigator)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(investigator: Investigator): Observable<Investigator> {
    const options = new RequestOptions();
    const url = `${this.investigatorAdminUrl}/${investigator.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(investigator), options)
      .map(response => response.json() as Investigator)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.investigatorUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
