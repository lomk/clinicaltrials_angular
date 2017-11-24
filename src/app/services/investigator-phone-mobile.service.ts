import { InvestigatorPhoneMobile }         from '../domain/investigator-phone-mobile';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class InvestigatorPhoneMobileService {
  private investigatorPhoneMobileAdminUrl = this.globals.API_URL + '/admin/investigatorPhoneMobile';
  private investigatorPhoneMobileUrl = this.globals.API_URL + '/investigatorPhoneMobile';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<InvestigatorPhoneMobile[]> {
    const options = new RequestOptions();
    const url = `${this.investigatorPhoneMobileUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as InvestigatorPhoneMobile[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<InvestigatorPhoneMobile> {
    const options = new RequestOptions();
    const url = `${this.investigatorPhoneMobileUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as InvestigatorPhoneMobile)
      .catch(this.handleError);
  }

  create(investigatorPhoneMobile: InvestigatorPhoneMobile): Observable<InvestigatorPhoneMobile> {
    const options = new RequestOptions();
    const url = `${this.investigatorPhoneMobileAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(investigatorPhoneMobile), options)
      .map(response => response.json() as InvestigatorPhoneMobile)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(investigatorPhoneMobile: InvestigatorPhoneMobile): Observable<InvestigatorPhoneMobile> {
    const options = new RequestOptions();
    const url = `${this.investigatorPhoneMobileAdminUrl}/${investigatorPhoneMobile.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(investigatorPhoneMobile), options)
      .map(response => response.json() as InvestigatorPhoneMobile)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.investigatorPhoneMobileUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
