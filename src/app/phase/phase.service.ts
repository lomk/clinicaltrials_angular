import { Phase }         from './phase';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class PhaseService {
  private phaseAdminUrl = this.globals.API_URL + '/admin/phase';
  private phaseUrl = this.globals.API_URL + '/phase';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Phase[]> {
    const options = new RequestOptions();
    const url = `${this.phaseUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Phase[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Phase> {
    const options = new RequestOptions();
    const url = `${this.phaseUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Phase)
      .catch(this.handleError);
  }

  create(phase: Phase): Observable<Phase> {
    const options = new RequestOptions();
    const url = `${this.phaseAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(phase), options)
      .map(response => response.json() as Phase)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(phase: Phase): Observable<Phase> {
    const options = new RequestOptions();
    const url = `${this.phaseAdminUrl}/${phase.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(phase), options)
      .map(response => response.json() as Phase)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.phaseUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
