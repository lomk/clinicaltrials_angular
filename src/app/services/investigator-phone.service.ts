import { InvestigatorPhone }         from '../domain/investigator-phone';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class InvestigatorPhoneService {
  private investigatorPhoneAdminUrl = this.globals.API_URL + '/admin/investigatorPhone';
  private investigatorPhoneUrl = this.globals.API_URL + '/investigatorPhone';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<InvestigatorPhone[]> {
    const options = new RequestOptions();
    const url = `${this.investigatorPhoneUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as InvestigatorPhone[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<InvestigatorPhone> {
    const options = new RequestOptions();
    const url = `${this.investigatorPhoneUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as InvestigatorPhone)
      .catch(this.handleError);
  }

  create(investigatorPhone: InvestigatorPhone): Observable<InvestigatorPhone> {
    const options = new RequestOptions();
    const url = `${this.investigatorPhoneAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(investigatorPhone), options)
      .map(response => response.json() as InvestigatorPhone)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(investigatorPhone: InvestigatorPhone): Observable<InvestigatorPhone> {
    const options = new RequestOptions();
    const url = `${this.investigatorPhoneAdminUrl}/${investigatorPhone.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(investigatorPhone), options)
      .map(response => response.json() as InvestigatorPhone)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.investigatorPhoneUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
