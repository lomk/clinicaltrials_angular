import { Section }              from '../domain/section';
import {Http, RequestOptions}   from '@angular/http';
import { Injectable }           from '@angular/core';
import {Headers}                from '@angular/http';
import {Observable}             from 'rxjs/Observable';
import {Globals}                from '../globals';

@Injectable()
export class SectionService {
  private sectionAdminUrl = this.globals.API_URL + '/admin/section';
  private sectionUrl = this.globals.API_URL + '/section';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(): Observable<Section[]> {
    const options = new RequestOptions();
    const url = `${this.sectionUrl}?page=0`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Section[])
      .catch(this.handleError);
  }

  getByMenu(menuId: number): Observable<Section[]> {
    const options = new RequestOptions();
    const url = `${this.sectionUrl}?menu=${menuId}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Section[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Section> {
    const options = new RequestOptions();
    const url = `${this.sectionUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Section)
      .catch(this.handleError);
  }

  create(section: Section): Observable<Section> {
    const options = new RequestOptions();
    const url = `${this.sectionAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(section), options)
      .map(response => response.json() as Section)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(section: Section): Observable<Section> {
    const options = new RequestOptions();
    const url = `${this.sectionAdminUrl}/${section.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(section), options)
      .map(response => response.json() as Section)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.sectionUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
