import { TerapeuticArea }         from './terapeutic-area';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class TerapeuticAreaService {
  private terapeuticAreaAdminUrl = this.globals.API_URL + '/admin/terapeuticArea';
  private terapeuticAreaUrl = this.globals.API_URL + '/terapeuticArea';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<TerapeuticArea[]> {
    const options = new RequestOptions();
    const url = `${this.terapeuticAreaUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as TerapeuticArea[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<TerapeuticArea> {
    const options = new RequestOptions();
    const url = `${this.terapeuticAreaUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as TerapeuticArea)
      .catch(this.handleError);
  }

  create(terapeuticArea: TerapeuticArea): Observable<TerapeuticArea> {
    const options = new RequestOptions();
    const url = `${this.terapeuticAreaAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(terapeuticArea), options)
      .map(response => response.json() as TerapeuticArea)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(terapeuticArea: TerapeuticArea): Observable<TerapeuticArea> {
    const options = new RequestOptions();
    const url = `${this.terapeuticAreaAdminUrl}/${terapeuticArea.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(terapeuticArea), options)
      .map(response => response.json() as TerapeuticArea)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.terapeuticAreaUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
