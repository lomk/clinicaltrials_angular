import { Gender }         from '../domain/gender';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class GenderService {
  private genderAdminUrl = this.globals.API_URL + '/admin/gender';
  private genderUrl = this.globals.API_URL + '/gender';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Gender[]> {
    const options = new RequestOptions();
    const url = `${this.genderUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Gender[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Gender> {
    const options = new RequestOptions();
    const url = `${this.genderUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Gender)
      .catch(this.handleError);
  }

  create(gender: Gender): Observable<Gender> {
    const options = new RequestOptions();
    const url = `${this.genderAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(gender), options)
      .map(response => response.json() as Gender)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(gender: Gender): Observable<Gender> {
    const options = new RequestOptions();
    const url = `${this.genderAdminUrl}/${gender.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(gender), options)
      .map(response => response.json() as Gender)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.genderUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
