import { AcceptHealthyVolunteers }         from './accept-healthy-volunteers';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class AcceptHealthyVolunteersService {
  private acceptHealthyVolunteersAdminUrl = this.globals.API_URL + '/admin/acceptHealthyVolunteers';
  private acceptHealthyVolunteersUrl = this.globals.API_URL + '/acceptHealthyVolunteers';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(): Observable<AcceptHealthyVolunteers[]> {
    const options = new RequestOptions();
    const url = `${this.acceptHealthyVolunteersUrl}?page=0`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as AcceptHealthyVolunteers[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<AcceptHealthyVolunteers> {
    const options = new RequestOptions();
    const url = `${this.acceptHealthyVolunteersUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as AcceptHealthyVolunteers)
      .catch(this.handleError);
  }

  create(acceptHealthyVolunteers: AcceptHealthyVolunteers): Observable<AcceptHealthyVolunteers> {
    const options = new RequestOptions();
    const url = `${this.acceptHealthyVolunteersAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(acceptHealthyVolunteers), options)
      .map(response => response.json() as AcceptHealthyVolunteers)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(acceptHealthyVolunteers: AcceptHealthyVolunteers): Observable<AcceptHealthyVolunteers> {
    const options = new RequestOptions();
    const url = `${this.acceptHealthyVolunteersAdminUrl}/${acceptHealthyVolunteers.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(acceptHealthyVolunteers), options)
      .map(response => response.json() as AcceptHealthyVolunteers)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.acceptHealthyVolunteersUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
