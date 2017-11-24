import { DrugManufacturer }         from '../domain/drug-manufacturer';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class DrugManufacturerService {
  private drugManufacturerAdminUrl = this.globals.API_URL + '/admin/drugManufacturer';
  private drugManufacturerUrl = this.globals.API_URL + '/drugManufacturer';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<DrugManufacturer[]> {
    const options = new RequestOptions();
    const url = `${this.drugManufacturerUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as DrugManufacturer[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<DrugManufacturer> {
    const options = new RequestOptions();
    const url = `${this.drugManufacturerUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as DrugManufacturer)
      .catch(this.handleError);
  }

  create(drugManufacturer: DrugManufacturer): Observable<DrugManufacturer> {
    const options = new RequestOptions();
    const url = `${this.drugManufacturerAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(drugManufacturer), options)
      .map(response => response.json() as DrugManufacturer)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(drugManufacturer: DrugManufacturer): Observable<DrugManufacturer> {
    const options = new RequestOptions();
    const url = `${this.drugManufacturerAdminUrl}/${drugManufacturer.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(drugManufacturer), options)
      .map(response => response.json() as DrugManufacturer)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.drugManufacturerUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
