import { Region }         from '../domain/region';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class RegionService {
  private regionAdminUrl = this.globals.API_URL + '/admin/region';
  private regionUrl = this.globals.API_URL + '/region';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Region[]> {
    const options = new RequestOptions();
    const url = `${this.regionUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Region[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Region> {
    const options = new RequestOptions();
    const url = `${this.regionUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Region)
      .catch(this.handleError);
  }

  create(region: Region): Observable<Region> {
    const options = new RequestOptions();
    const url = `${this.regionAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(region), options)
      .map(response => response.json() as Region)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(region: Region): Observable<Region> {
    const options = new RequestOptions();
    const url = `${this.regionAdminUrl}/${region.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(region), options)
      .map(response => response.json() as Region)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.regionUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
