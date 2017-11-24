import { Tag }         from '../domain/tag';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class TagService {
  private tagAdminUrl = this.globals.API_URL + '/admin/tag';
  private tagUrl = this.globals.API_URL + '/tag';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Tag[]> {
    const options = new RequestOptions();
    const url = `${this.tagUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Tag[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Tag> {
    const options = new RequestOptions();
    const url = `${this.tagUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Tag)
      .catch(this.handleError);
  }

  create(tag: Tag): Observable<Tag> {
    const options = new RequestOptions();
    const url = `${this.tagAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(tag), options)
      .map(response => response.json() as Tag)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(tag: Tag): Observable<Tag> {
    const options = new RequestOptions();
    const url = `${this.tagAdminUrl}/${tag.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(tag), options)
      .map(response => response.json() as Tag)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.tagUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
