import { PhoneMobileCode }         from '../domain/phone-mobile-code';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class PhoneMobileCodeService {
  private phoneMobileCodeAdminUrl = this.globals.API_URL + '/admin/phoneMobileCode';
  private phoneMobileCodeUrl = this.globals.API_URL + '/phoneMobileCode';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<PhoneMobileCode[]> {
    const options = new RequestOptions();
    const url = `${this.phoneMobileCodeUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as PhoneMobileCode[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<PhoneMobileCode> {
    const options = new RequestOptions();
    const url = `${this.phoneMobileCodeUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as PhoneMobileCode)
      .catch(this.handleError);
  }

  create(phoneMobileCode: PhoneMobileCode): Observable<PhoneMobileCode> {
    const options = new RequestOptions();
    const url = `${this.phoneMobileCodeAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(phoneMobileCode), options)
      .map(response => response.json() as PhoneMobileCode)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(phoneMobileCode: PhoneMobileCode): Observable<PhoneMobileCode> {
    const options = new RequestOptions();
    const url = `${this.phoneMobileCodeAdminUrl}/${phoneMobileCode.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(phoneMobileCode), options)
      .map(response => response.json() as PhoneMobileCode)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.phoneMobileCodeUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
