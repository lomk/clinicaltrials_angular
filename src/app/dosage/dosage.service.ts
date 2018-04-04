import { Dosage }         from './dosage';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class DosageService {
  private dosageAdminUrl = this.globals.API_URL + '/admin/dosage';
  private dosageUrl = this.globals.API_URL + '/dosage';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Dosage[]> {
    const options = new RequestOptions();
    const url = `${this.dosageUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Dosage[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Dosage> {
    const options = new RequestOptions();
    const url = `${this.dosageUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Dosage)
      .catch(this.handleError);
  }

  create(dosage: Dosage): Observable<Dosage> {
    const options = new RequestOptions();
    const url = `${this.dosageAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(dosage), options)
      .map(response => response.json() as Dosage)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(dosage: Dosage): Observable<Dosage> {
    const options = new RequestOptions();
    const url = `${this.dosageAdminUrl}/${dosage.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(dosage), options)
      .map(response => response.json() as Dosage)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.dosageUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
